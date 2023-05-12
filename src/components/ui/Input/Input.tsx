import clsx from 'clsx';
import styles from './Input.module.scss';

export interface InputProps {
  placeloder: string;
  type?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  placeloder,
  className,
  type,
}) => (
  <input
    type={type}
    className={clsx(styles.input, className)}
    placeholder={placeloder}
  />
);
