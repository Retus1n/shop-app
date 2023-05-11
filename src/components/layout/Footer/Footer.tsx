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

export const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.top}>
				<div className={styles.item}>
					<h2>Categories</h2>
					{footerCategory.map((item) => (
						<span key={item.title}>{item.title}</span>
					))}
				</div>
				<div className={styles.item}>
					<h2>Links</h2>
					{footerLinks.map((item) => (
						<span key={item.title}>{item.title}</span>
					))}
				</div>
				<div className={styles.item}>
					<h2>About</h2>
					<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            rhoncus dolor, sed luctus turpis. Vivamus porta dui magna, quis.
					</p>
				</div>
				<div className={styles.item}>
					<h2>Contact</h2>
					<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            rhoncus dolor, sed luctus turpis. Vivamus porta dui magna, quis.
					</p>
				</div>
			</div>
		</div>
	);
};
