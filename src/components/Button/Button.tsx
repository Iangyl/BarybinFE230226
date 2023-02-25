import React from 'react';

import styles from './Button.module.sass';

const Button = ({
  children,
  type,
  onClick,
  className,
  style,
  variant,
}: {
  children?: JSX.Element | JSX.Element[] | string;
  type?: 'button' | 'reset' | 'submit';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  className?: string;
  variant: 'primary' | 'secondary';
}) => (
  <button
    style={style}
    className={`${
      variant === 'primary' ? styles.primary : styles.secondary
    } ${className}`}
    onClick={onClick}
    type={type ?? 'button'}
  >
    {children}
  </button>
);

export default Button;
