import { FC, useState } from 'react';
import styles from './Slider.module.scss';
import { EastOutlined, WestOutlined } from '@mui/icons-material';

const data = [
	'https://img.freepik.com/free-photo/fashionable-woman-red-coat-black-hat-posing_273443-2430.jpg?w=996&t=st=1683738834~exp=1683739434~hmac=c6aed149052d544379b6785f1be7a776df8f43c5adefb1356775c56d33d712ac',
	'https://img.freepik.com/free-photo/stylish-flirty-modern-africanamerican-woman-afro-hairstyle-sweater-headband-touching-sunglasses-s_1258-82603.jpg?w=996&t=st=1683738882~exp=1683739482~hmac=1fee3c44a0d205440d3b79ea33d3e73273c79f7b35aa0446dcf58fc972e20347',
	'https://img.freepik.com/free-photo/attractive-curly-woman-purple-cashmere-sweater-fuchsia-sunglasses-poses-isolated-wall_197531-24158.jpg?w=996&t=st=1683738907~exp=1683739507~hmac=44b9fad3af227d1b95227387cf41150a9c4c117361d868291b4e58a91cbe66ff',
];

export const Slider: FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
	};
	const nextSlide = () => {
		setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
	};

	return (
		<div className={styles.slider}>
			<div
				className={styles.container}
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
			>
				<img src={data[0]} alt='' />
				<img src={data[1]} alt='' />
				<img src={data[2]} alt='' />
			</div>
			<div className={styles.icons}>
				<div className={styles.icon} onClick={prevSlide}>
					<WestOutlined />
				</div>
				<div className={styles.icon} onClick={nextSlide}>
					<EastOutlined />
				</div>
			</div>
		</div>
	);
};
