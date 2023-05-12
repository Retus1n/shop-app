import { Link } from 'react-router-dom';
import { FeaturedProductspDataProps } from '@/components/sections';
import styles from './Card.module.scss';
import { Typography } from '..';

export interface CardProps {
  item: FeaturedProductspDataProps;
}

export const Card: React.FC<CardProps> = ({ item }) => (
  <Link className={styles.link} to={`/product/${item.id}`}>
    <div className={styles.card}>
      <div className={styles.image}>
        {item.isNew && <span>New Season</span>}
        <img src={item.img} alt={item.title} className={styles.mainImg} />
        <img src={item.img2} alt={item.title} className={styles.secondImg} />
      </div>
      <Typography variant='title-2' tag='h2'>
        {item.title}
      </Typography>
      <div className={styles.prices}>
        <Typography
          variant='description-2'
          tag='h3'
          className={styles.oldPrice}
        >
          ${item.oldPrice}
        </Typography>
        <Typography variant='description-2' tag='h3'>
          ${item.price}
        </Typography>
      </div>
    </div>
  </Link>
);
