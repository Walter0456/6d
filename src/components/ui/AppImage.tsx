'use client';

import React, { memo, useCallback, useMemo, useState } from 'react';
import Image, { type ImageProps } from 'next/image';

type AppImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
};

const AppImage = memo(function AppImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  fill = false,
  sizes,
  onClick,
  fallbackSrc = '/assets/images/no_image.png',
  loading = 'lazy',
  unoptimized = false,
  style,
  ...restProps
}: AppImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const isExternalUrl = useMemo(
    () => typeof imageSrc === 'string' && imageSrc.startsWith('http'),
    [imageSrc]
  );
  const resolvedUnoptimized = unoptimized || isExternalUrl;

  const handleError = useCallback(() => {
    if (!hasError && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(true);
    }
    setIsLoading(false);
  }, [fallbackSrc, hasError, imageSrc]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);

  const imageClassName = useMemo(() => {
    const classes = [className];
    if (isLoading) classes.push('bg-gray-200');
    if (onClick) classes.push('cursor-pointer hover:opacity-90 transition-opacity duration-200');
    return classes.filter(Boolean).join(' ');
  }, [className, isLoading, onClick]);

  const sharedProps = useMemo(
    () => ({
      src: imageSrc,
      className: imageClassName,
      quality,
      placeholder,
      unoptimized: resolvedUnoptimized,
      onError: handleError,
      onLoad: handleLoad,
      onClick,
      ...(blurDataURL && placeholder === 'blur' ? { blurDataURL } : {}),
      ...(priority ? { priority: true } : { loading }),
    }),
    [
      imageSrc,
      imageClassName,
      quality,
      placeholder,
      resolvedUnoptimized,
      handleError,
      handleLoad,
      onClick,
      blurDataURL,
      priority,
      loading,
    ]
  );

  if (fill) {
    return (
      <div className="relative" style={{ width: '100%', height: '100%' }}>
        <Image
          {...restProps}
          {...sharedProps}
          alt={alt}
          fill
          sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          style={{ objectFit: 'cover', ...style }}
        />
      </div>
    );
  }

  return (
    <Image
      {...restProps}
      {...sharedProps}
      alt={alt}
      width={width || 400}
      height={height || 300}
      sizes={sizes}
      style={style}
    />
  );
});

AppImage.displayName = 'AppImage';

export default AppImage;
