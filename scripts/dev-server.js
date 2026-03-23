const net = require('net');
const { spawn } = require('child_process');

const DEFAULT_PORT = Number.parseInt(process.env.PORT || '4028', 10);
const MAX_PORT_ATTEMPTS = 20;

function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once('error', () => resolve(false));
    server.once('listening', () => {
      server.close(() => resolve(true));
    });

    server.listen(port);
  });
}

async function findOpenPort(startPort) {
  for (let offset = 0; offset < MAX_PORT_ATTEMPTS; offset += 1) {
    const port = startPort + offset;
    // eslint-disable-next-line no-await-in-loop
    if (await isPortAvailable(port)) {
      return port;
    }
  }

  return null;
}

async function main() {
  const port = await findOpenPort(DEFAULT_PORT);

  if (port == null) {
    console.error(
      `No open port found between ${DEFAULT_PORT} and ${DEFAULT_PORT + MAX_PORT_ATTEMPTS - 1}.`
    );
    process.exit(1);
  }

  if (port !== DEFAULT_PORT) {
    console.log(`Port ${DEFAULT_PORT} is busy, starting Next.js on ${port} instead.`);
  }

  const nextBin = require.resolve('next/dist/bin/next');
  const child = spawn(process.execPath, [nextBin, 'dev', '-p', String(port)], {
    stdio: 'inherit',
    env: {
      ...process.env,
      PORT: String(port),
    },
  });

  const forwardSignal = (signal) => {
    if (!child.killed) {
      child.kill(signal);
    }
  };

  process.on('SIGINT', forwardSignal);
  process.on('SIGTERM', forwardSignal);

  child.on('exit', (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    process.exit(code ?? 0);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
