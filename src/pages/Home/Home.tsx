import { FC } from 'react';
import { Slider } from '@/components/ui';
import { FeaturedProducts } from '@/components/sections';

export const Home: FC = () => (
  <section>
    <Slider />
    <FeaturedProducts type='Features' />
  </section>
);
