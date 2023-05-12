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

export const FOOTER_TEST_ID = {
  HEADING_CATEGORIES: 'heading-categories',
  LISTITEM_CATEGORY: 'listitem-category',
  HEADING_LINKS: 'heading-links',
  LISTITEM_LINKS: 'listitem-links',
  HEADING_ABOUT: 'heading-about',
  ABOUT_TEXT: 'text-about',
  HEADING_CONTACT: 'heading-contact',
  TEXT_CONTACT: 'text-contact',
};

export const Footer: FC = () => (
  <div className={styles.footer}>
    <div className={styles.top}>
      <div className={styles.item}>
        <h2 data-testid={FOOTER_TEST_ID.HEADING_CATEGORIES}>Categories</h2>
        {footerCategory.map((item) => (
          <span key={item.title} data-testid={FOOTER_TEST_ID.LISTITEM_CATEGORY}>
            {item.title}
          </span>
        ))}
      </div>
      <div className={styles.item}>
        <h2 data-testid={FOOTER_TEST_ID.HEADING_LINKS}>Links</h2>
        {footerLinks.map((item) => (
          <span key={item.title} data-testid={FOOTER_TEST_ID.LISTITEM_LINKS}>
            {item.title}
          </span>
        ))}
      </div>
      <div className={styles.item}>
        <h2 data-testid={FOOTER_TEST_ID.HEADING_ABOUT}>About</h2>
        <p data-testid={FOOTER_TEST_ID.ABOUT_TEXT}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          rhoncus dolor, sed luctus turpis. Vivamus porta dui magna, quis.
        </p>
      </div>
      <div className={styles.item}>
        <h2 data-testid={FOOTER_TEST_ID.HEADING_CONTACT}>Contact</h2>
        <p data-testid={FOOTER_TEST_ID.TEXT_CONTACT}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          rhoncus dolor, sed luctus turpis. Vivamus porta dui magna, quis.
        </p>
      </div>
    </div>
  </div>
);
