import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';
import { Button } from '@/components/ui';

export const Categories: React.FC = () => {
  console.log('@');
  return (
    <div className={styles.categories}>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src='https://img.freepik.com/free-photo/stylish-flirty-modern-africanamerican-woman-afro-hairstyle-sweater-headband-touching-sunglasses-s_1258-82603.jpg?w=996&t=st=1683738882~exp=1683739482~hmac=1fee3c44a0d205440d3b79ea33d3e73273c79f7b35aa0446dcf58fc972e20347'
            alt='Categories img'
          />
          <Button className={styles.btn} variant='primary'>
            <Link to='/products/1' className='link'>
              Sale
            </Link>
          </Button>
        </div>
        <div className={styles.row}>
          <img
            src='https://img.freepik.com/free-photo/stylish-flirty-modern-africanamerican-woman-afro-hairstyle-sweater-headband-touching-sunglasses-s_1258-82603.jpg?w=996&t=st=1683738882~exp=1683739482~hmac=1fee3c44a0d205440d3b79ea33d3e73273c79f7b35aa0446dcf58fc972e20347'
            alt='Categories img'
          />
          <Button className={styles.btn} variant='primary'>
            <Link to='/products/1' className='link'>
              Women
            </Link>
          </Button>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          {' '}
          <img
            src='https://img.freepik.com/free-photo/stylish-flirty-modern-africanamerican-woman-afro-hairstyle-sweater-headband-touching-sunglasses-s_1258-82603.jpg?w=996&t=st=1683738882~exp=1683739482~hmac=1fee3c44a0d205440d3b79ea33d3e73273c79f7b35aa0446dcf58fc972e20347'
            alt='Categories img'
          />
          <Button className={styles.btn} variant='primary'>
            <Link to='/products/1' className='link'>
              New Season
            </Link>
          </Button>
        </div>
      </div>
      <div className={clsx(styles.col, styles.col_l)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.row}>
              <img
                src='https://img.freepik.com/free-photo/stylish-flirty-modern-africanamerican-woman-afro-hairstyle-sweater-headband-touching-sunglasses-s_1258-82603.jpg?w=996&t=st=1683738882~exp=1683739482~hmac=1fee3c44a0d205440d3b79ea33d3e73273c79f7b35aa0446dcf58fc972e20347'
                alt='Categories img'
              />
              <Button className={styles.btn} variant='primary'>
                <Link to='/products/1' className='link'>
                  Men
                </Link>
              </Button>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.row}>
              <img
                src='https://img.freepik.com/free-photo/stylish-flirty-modern-africanamerican-woman-afro-hairstyle-sweater-headband-touching-sunglasses-s_1258-82603.jpg?w=996&t=st=1683738882~exp=1683739482~hmac=1fee3c44a0d205440d3b79ea33d3e73273c79f7b35aa0446dcf58fc972e20347'
                alt='Categories img'
              />
              <Button className={styles.btn} variant='primary'>
                <Link to='/products/1' className='link'>
                  Accessories
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          {' '}
          <img
            src='https://img.freepik.com/free-photo/stylish-flirty-modern-africanamerican-woman-afro-hairstyle-sweater-headband-touching-sunglasses-s_1258-82603.jpg?w=996&t=st=1683738882~exp=1683739482~hmac=1fee3c44a0d205440d3b79ea33d3e73273c79f7b35aa0446dcf58fc972e20347'
            alt='Categories img'
          />
          <Button className={styles.btn} variant='primary'>
            <Link to='/products/1' className='link'>
              Shoes
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
