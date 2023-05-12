import clsx from 'clsx';
import styles from './Button.module.scss';

export type ButtonVariants = 'primary' | 'form';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant: ButtonVariants;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
}) => (
  <button
    type='button'
    className={clsx(className, {
      [styles.button]: variant === 'primary',
      [styles.buttonContact]: variant === 'form',
    })}
  >
    {children}
  </button>
);
