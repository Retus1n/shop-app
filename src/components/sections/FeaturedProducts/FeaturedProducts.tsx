import { Card, Typography } from '@/components/ui';
import styles from './FeaturedProducts.module.scss';

export interface FeaturedProductspDataProps {
  id: number;
  img: string;
  img2: string;
  title: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
}

export interface FeaturedProductsProps {
  type?: string;
}

const data: FeaturedProductspDataProps[] = [
  {
    id: 1,
    img: 'https://img.freepik.com/free-photo/attractive-curly-woman-purple-cashmere-sweater-fuchsia-sunglasses-poses-isolated-wall_197531-24158.jpg?w=996&t=st=1683738907~exp=1683739507~hmac=44b9fad3af227d1b95227387cf41150a9c4c117361d868291b4e58a91cbe66ff',
    img2: 'https://img.freepik.com/free-photo/fashionable-woman-red-coat-black-hat-posing_273443-2430.jpg?w=996&t=st=1683738834~exp=1683739434~hmac=c6aed149052d544379b6785f1be7a776df8f43c5adefb1356775c56d33d712ac',
    title: 'Long Sleeve Graphic T-shirt',
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: 'https://img.freepik.com/free-photo/attractive-curly-woman-purple-cashmere-sweater-fuchsia-sunglasses-poses-isolated-wall_197531-24158.jpg?w=996&t=st=1683738907~exp=1683739507~hmac=44b9fad3af227d1b95227387cf41150a9c4c117361d868291b4e58a91cbe66ff',
    img2: 'https://img.freepik.com/free-photo/attractive-curly-woman-purple-cashmere-sweater-fuchsia-sunglasses-poses-isolated-wall_197531-24158.jpg?w=996&t=st=1683738907~exp=1683739507~hmac=44b9fad3af227d1b95227387cf41150a9c4c117361d868291b4e58a91cbe66ff',
    title: 'Long Sleeve Graphic T-shirt',
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img: 'https://img.freepik.com/free-photo/attractive-curly-woman-purple-cashmere-sweater-fuchsia-sunglasses-poses-isolated-wall_197531-24158.jpg?w=996&t=st=1683738907~exp=1683739507~hmac=44b9fad3af227d1b95227387cf41150a9c4c117361d868291b4e58a91cbe66ff',
    img2: 'https://img.freepik.com/free-photo/attractive-curly-woman-purple-cashmere-sweater-fuchsia-sunglasses-poses-isolated-wall_197531-24158.jpg?w=996&t=st=1683738907~exp=1683739507~hmac=44b9fad3af227d1b95227387cf41150a9c4c117361d868291b4e58a91cbe66ff',
    title: 'Long Sleeve Graphic T-shirt',
    isNew: false,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    img: 'https://img.freepik.com/free-photo/attractive-curly-woman-purple-cashmere-sweater-fuchsia-sunglasses-poses-isolated-wall_197531-24158.jpg?w=996&t=st=1683738907~exp=1683739507~hmac=44b9fad3af227d1b95227387cf41150a9c4c117361d868291b4e58a91cbe66ff',
    img2: 'https://img.freepik.com/free-photo/attractive-curly-woman-purple-cashmere-sweater-fuchsia-sunglasses-poses-isolated-wall_197531-24158.jpg?w=996&t=st=1683738907~exp=1683739507~hmac=44b9fad3af227d1b95227387cf41150a9c4c117361d868291b4e58a91cbe66ff',
    title: 'Long Sleeve Graphic T-shirt',
    isNew: false,
    oldPrice: 19,
    price: 12,
  },
];

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ type }) => (
  <div className={styles.featureProducts}>
    <div className={styles.top}>
      <Typography variant='title-1' tag='h1' type={type} className={styles.h1}>
        {' '}
        products
      </Typography>
      <Typography variant='description-1' tag='p' className={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non tortor
        scelerisque, bibendum magna in, luctus odio. Aliquam id mattis tellus.
        Duis convallis non elit vel maximus. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque sed
        accumsan tortor, id efficitur neque. Suspendisse malesuada ac.
      </Typography>
    </div>
    <div className={styles.bottom}>
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  </div>
);
