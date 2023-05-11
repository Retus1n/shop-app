import { FC } from 'react';
import styles from './Footet.module.scss';

const footerCategory = [
  {
    title: 'Women',
  },
  {
    title: 'Men',
  },
  {
    title: 'Shoes',
  },
  {
    title: 'Accessories',
  },
  {
    title: 'New Arrivals',
  },
];

const footerLinks = [
  {
    title: 'FAQ',
  },
  {
    title: 'Pages',
  },
  {
    title: 'Stores',
  },
  {
    title: 'Compare',
  },
  {
    title: 'Cookies',
  },
];

export const Footer: FC = () => (
  <div className={styles.footer}>
    <div className={styles.top}>
      <div className={styles.item}>
        <h2 data-testid="heading-categories">Categories</h2>
        {footerCategory.map((item) => (
          <span key={item.title} data-testid="listitem-category">
            {item.title}
          </span>
        ))}
      </div>
      <div className={styles.item}>
        <h2 data-testid="heading-links">Links</h2>
        {footerLinks.map((item) => (
          <span key={item.title} data-testid="listitem-links">
            {item.title}
          </span>
        ))}
      </div>
      <div className={styles.item}>
        <h2 data-testid="heading-about">About</h2>
        <p data-testid="text-about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          rhoncus dolor, sed luctus turpis. Vivamus porta dui magna, quis.
        </p>
      </div>
      <div className={styles.item}>
        <h2 data-testid="heading-contact">Contact</h2>
        <p data-testid="text-contact">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          rhoncus dolor, sed luctus turpis. Vivamus porta dui magna, quis.
        </p>
      </div>
    </div>
  </div>
);
