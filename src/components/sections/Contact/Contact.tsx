import { Facebook, Google, Pinterest, Twitter } from '@mui/icons-material';
import styles from './Contact.module.scss';
import { Button, Input } from '@/components/ui';

export const Contact: React.FC = () => (
  <div className={styles.contact}>
    <div className={styles.wrapper}>
      <span>BE IN TOUCH WITH US:</span>
      <div className={styles.mail}>
        <Input placeloder='Enter your email' type='text' />
        <Button variant='form'>JOIN US</Button>
      </div>
      <div className={styles.icons}>
        <Facebook />
        <Twitter />
        <Google />
        <Pinterest />
      </div>
    </div>
  </div>
);
