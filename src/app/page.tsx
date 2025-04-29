import HomePage from './pages';
import bgLine from '../../public/img/bg-line.png';
import { Box } from '@mui/material';
import Image from 'next/image';
import Footer from './components/Footer';
import HeaderMarket from './components/Header/HeaderMarket';

export default function Home() {
  return (
    <div>
      <header>
        <HeaderMarket />
      </header>
      <Box
        component="main"
        sx={{
          backgroundImage: 'url("/img/bg-page.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <HomePage />
        <Image src={bgLine} alt="bg-line" style={{ height: '100%', width: '100%' }} />
      </Box>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
