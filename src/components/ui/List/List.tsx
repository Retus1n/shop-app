import { Card } from '@/components/ui';
import styles from './List.module.scss';

const data = [
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

export const List: React.FC = () => (
  <div className={styles.list}>
    {data?.map((item) => (
      <Card item={item} key={item.id} />
    ))}
  </div>
);
