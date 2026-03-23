'use client';

import React, { memo, useMemo } from 'react';
import {
  ClockIcon,
  FireIcon,
  HeartIcon,
  MapPinIcon,
  SparklesIcon,
  StarIcon,
} from '@heroicons/react/24/solid';

const iconMap = {
  SparklesIcon,
  FireIcon,
  HeartIcon,
  MapPinIcon,
  ClockIcon,
  StarIcon,
} as const;

type IconName = keyof typeof iconMap;

interface AppIconProps {
  name?: IconName | string;
  size?: number;
  className?: string;
}

const AppIcon = memo(function AppIcon({
  name = 'SparklesIcon',
  size = 24,
  className = '',
}: AppIconProps) {
  const IconComponent = useMemo(() => {
    if (name in iconMap) {
      return iconMap[name as IconName];
    }
    return SparklesIcon;
  }, [name]);

  return (
    <IconComponent
      aria-hidden="true"
      className={className}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
});

AppIcon.displayName = 'AppIcon';

export default AppIcon;
