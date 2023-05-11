import { FC } from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from './Navbar.module.scss';

const menu = [
  {
    link: '/products/1',
    title: 'Women',
  },
  {
    link: '/products/2',
    title: 'Men',
  },
  {
    link: '/products/3',
    title: 'Children',
  },
];

const menuRight = [
  {
    link: '/',
    title: 'Homepage',
  },
  {
    link: '/',
    title: 'About',
  },
  {
    link: '/',
    title: 'Contact',
  },
  {
    link: '/',
    title: 'Stores',
  },
];

export const Navbar: FC = () => (
  <div className={styles.navbar}>
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {menu.map((item) => (
          <Link className="link" key={item.title} to={item.link} role="link">
            {item.title}
          </Link>
        ))}
      </div>
      <div className={styles.center}>
        <Link className="link" to="/" role="link">
          MYSTORE
        </Link>
      </div>
      <div className={styles.right}>
        {menuRight.map((item) => (
          <Link to={item.link} key={item.title} className="link" role="link">
            {item.title}
          </Link>
        ))}

        <div className={styles.icons}>
          <SearchIcon data-testid="icon" />
          <PersonOutlineOutlinedIcon data-testid="icon" />
          <FavoriteBorderOutlinedIcon data-testid="icon" />
          <div className={styles.cartIcon}>
            <ShoppingCartOutlinedIcon data-testid="icon" />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
