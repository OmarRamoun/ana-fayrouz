/* eslint-disable react/jsx-props-no-spreading */
import { cn } from '@lib';
import React from 'react';
import type { AnchorHTMLAttributes } from 'react';

import styles from './styles.module.css';

const Button = ({
  href,
  className = '',
  children,
  secondary = false,
  ...rest
}: {
    href: string;
    // eslint-disable-next-line react/require-default-props
    className?: string;
    children: React.ReactNode;
    // eslint-disable-next-line react/require-default-props
    secondary?: boolean;
  } & AnchorHTMLAttributes<HTMLAnchorElement>): React.JSX.Element => (
    <a
      href={href}
      className={cn(styles.button, className, secondary ? styles.secondary : {})}
      {...rest}
    >
      {children}
    </a>
);

export { Button };
