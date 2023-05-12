import clsx from 'clsx';
import styles from './Typography.module.scss';

export type TypographyVariant =
  | 'title-1'
  | 'title-2'
  | 'description-1'
  | 'description-2';
export type TypographyTag = 'h1' | 'h2' | 'h3' | 'span' | 'div' | 'p';

export interface TypographyProps {
  variant: TypographyVariant;
  className?: string;
  tag?: TypographyTag;
  children: React.ReactNode;
  type?: string;
}

export const TYPOGRAPHY_TEST_IDS = {
  CONTAINER: 'container',
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  variant,
  tag: Tag = 'div',
  type,
}) => (
  <Tag
    className={clsx(className, {
      [styles.title]: variant === 'title-1',
      [styles.title_2]: variant === 'title-2',
      [styles.description]: variant === 'description-1',
      [styles.description_2]: variant === 'description-2',
    })}
    data-testid={TYPOGRAPHY_TEST_IDS.CONTAINER}
  >
    {type && <>{type}</>}
    {children}
  </Tag>
);
