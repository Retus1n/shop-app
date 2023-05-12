import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className }) => (
  <button type='button' className={clsx(styles.button, className)}>
    {children}
  </button>
);
