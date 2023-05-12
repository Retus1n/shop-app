import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { List, Typography } from '@/components/ui';
import styles from './Products.module.scss';

export const Products: React.FC = () => {
  // eslint-disable-next-line radix
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState(null);

  return (
    <div className={styles.products}>
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <Typography variant='title-1' tag='h2'>
            Product Categories
          </Typography>
          <div className={styles.inputItem}>
            <input type='checkbox' id='1' value={1} />
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className={styles.inputItem}>
            <input type='checkbox' id='2' value={2} />
            <label htmlFor='1'>Skirts</label>
          </div>
          <div className={styles.inputItem}>
            <input type='checkbox' id='3' value={3} />
            <label htmlFor='1'>Coats</label>
          </div>
        </div>
        <div className={styles.filterItem}>
          <Typography variant='title-1' tag='h2'>
            Filter by price
          </Typography>
          <div className={styles.inputItem}>
            <span>0</span>
            <input
              type='range'
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className={styles.filterItem}>
          <Typography variant='title-1' tag='h2'>
            Sort by
          </Typography>
          <div className={styles.inputItem}>
            <input
              type='radio'
              id='asc'
              value='asc'
              name='price'
              onChange={(e) => setSort('asc')}
            />
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className={styles.inputItem}>
            <input
              type='radio'
              id='desc'
              value='desc'
              name='price'
              onChange={(e) => setSort('desc')}
            />
            <label htmlFor='desc'>Price (Higest first)</label>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img
          className={styles.catImg}
          src='https://i.pinimg.com/originals/88/39/52/883952846547770a6a85a2bf661b3768.jpg'
          alt='Banner img'
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};
