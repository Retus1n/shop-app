import { Typography } from '@/components/ui';
import styles from './Products.module.scss';

export const Products: React.FC = () => (
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
          <input type='range' min={0} max={1000} />
          <span>1000</span>
        </div>
      </div>
      <div className='filterItem'>
        <Typography variant='title-1' tag='h2'>
          Sort by
        </Typography>
        <div className={styles.inputItem}>
          <input type='radio' id='asc' value='asc' name='price' />
          <label htmlFor='asc'>Price (Lowest first)</label>
        </div>
        <div className={styles.inputItem}>
          <input type='radio' id='desc' value='desc' name='price' />
          <label htmlFor='desc'>Price (Higest first)</label>
        </div>
      </div>
    </div>
    <div className={styles.right}>
      <img
        className={styles.catId}
        src='https://i.pinimg.com/originals/88/39/52/883952846547770a6a85a2bf661b3768.jpg'
        alt='Banner img'
      />
    </div>
  </div>
);
