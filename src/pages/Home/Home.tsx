import { FC } from 'react';
import { Slider } from '@/components/ui';
import { Categories, Contact, FeaturedProducts } from '@/components/sections';

export const Home: FC = () => (
  <section>
    <Slider />
    <FeaturedProducts type='Features' />
    <Categories />
    <FeaturedProducts type='Trending' />
    <Contact />
  </section>
);
