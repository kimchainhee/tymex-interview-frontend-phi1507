'use client';
import { SetStateAction, useState, useMemo } from 'react';
import { Box, Button, CardMedia, Drawer, Grid, IconButton, Typography } from '@mui/material';
import newArrival from '../../../../public/img/new-arrival.png';
import Image from 'next/image';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import GradientMenu from '../Menu/GradianMenu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// const menuItems = ['Home', 'About Us', 'Our Teams', 'Marketplace', 'Roadmap', 'Whitepaper'];

const character = [
  { id: 1, name: 'Assassin', image: 'https://i.ibb.co/svTBDCbd/pngwing-6.png' },
  { id: 2, name: 'Neon Guy', image: 'https://i.ibb.co/chrkQTjM/pngwing-6-1.png' },
  { id: 3, name: 'Mafia England', image: 'https://i.ibb.co/nqMtf860/pngwing-6-2.png' },
  { id: 4, name: 'Bassketball Girl', image: 'https://i.ibb.co/cc1HYj3c/pngwing-6-3.png' },
];

export default function HeaderMarket() {
  const menuItems = useMemo(
    () => ['Home', 'About Us', 'Our Teams', 'Marketplace', 'Roadmap', 'Whitepaper'],
    []
  );

  const [selectedMenu, setSelectedMenu] = useState(menuItems[3]);
  const [menuMobi, setMenuMobi] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const handleMenu = (value: SetStateAction<string>) => {
    setSelectedMenu(value);
    setMenuMobi(false);
  };

  return (
    <Box
      sx={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/bg-header.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ position: 'sticky', top: 0, zIndex: 10, height: 84, background: '#17161AB2' }}>
        <Box
          sx={{
            maxWidth: 1600,
            margin: 'auto',
            height: '100%',
            padding: '16px',
          }}
        >
          <Grid container alignItems="center" sx={{ height: '100%' }}>
            <Grid size={{ xs: 4, md: 8 }}>
              <GradientMenu
                display={matches}
                menuItems={menuItems}
                selectedMenu={selectedMenu}
                onSelect={setSelectedMenu}
              />
              <Box
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <IconButton
                  sx={{
                    borderRadius: '4px',
                    background: 'linear-gradient(91.47deg, #da458f -6%, #da34dd 113.05%)',
                    '& svg': { color: '#FFF' },
                  }}
                  onClick={() => setMenuMobi(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid size={{ xs: 8, md: 4 }}>
              <Box display="flex" justifyContent="flex-end" gap={{ xs: 3, md: 6 }}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    background: 'linear-gradient(90deg, #DA458F -6%, #DA34DD 113.05%)',
                    boxShadow: '0px 0px 50px 0px #BB4BFF52',
                  }}
                >
                  Connect Wallet
                </Button>
                <Box display="flex" sx={{ '& svg': { color: '#FFF' } }}>
                  <IconButton>
                    <LanguageIcon />
                  </IconButton>
                  <IconButton>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', xl: 'block' },
          maxWidth: 1600,
          margin: 'auto',
          padding: { xs: '40px 16px', md: '160px 24px 40px 24px' },
        }}
      >
        <Grid container>
          <Grid size={{ xs: 8 }}>
            <Image
              src={newArrival}
              alt="new-arrival"
              style={{ width: '100%', objectFit: 'contain' }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', xl: 'block' },
          backgroundImage: 'url("/img/bg-line-header.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: 300,
        }}
      >
        <Box sx={{ maxWidth: 1600, margin: 'auto', padding: { xs: '40px 16px', md: '40px 24px' } }}>
          <Grid container>
            <Grid size={{ xs: 8 }}>
              <Grid container spacing={8}>
                {character.map((item) => (
                  <Grid key={item.id} size={{ xs: 3 }}>
                    <Box
                      sx={{
                        backgroundImage: 'url("/img/bg-character.png")',
                        backgroundSize: '100% 120px',
                        backgroundPosition: 'bottom',
                        backgroundRepeat: 'no-repeat',
                        boxShadow: '-10px 10px',
                        height: 120,
                        marginTop: '50px',
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="168"
                        image={item.image}
                        alt={item.name}
                        sx={{ objectFit: 'contain', transform: 'translateY(-25%)' }}
                      />
                    </Box>
                    <Box
                      sx={{
                        py: 3,
                        textAlign: 'center',
                        '& p': {
                          textTransform: 'uppercase',
                          fontSize: '18px',
                          fontWeight: 700,
                        },
                      }}
                    >
                      <Typography>{item.name}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid size={{ xs: 4 }} sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="655"
                image="https://i.ibb.co/My8btLrN/pngwing-6-4.png"
                alt="TheDJ"
                sx={{ position: 'absolute', bottom: -17, objectFit: 'contain' }}
              />
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  position: 'absolute',
                  left: 50,
                  bottom: -20,
                  backgroundImage: 'url("/img/frame-name.png")',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: 169,
                  width: 473,
                  '& p': {
                    textTransform: 'uppercase',
                    fontSize: '72px',
                    fontWeight: 700,
                    color: '#FFF',
                    paddingLeft: '64px',
                  },
                }}
              >
                <Typography>The DJ</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Drawer
        open={menuMobi}
        onClose={() => setMenuMobi(false)}
        sx={{
          '.MuiDrawer-paper': { padding: '32px 16px', backgroundColor: '#17161A', width: 300 },
        }}
      >
        <Box display="flex" gap={2} justifyContent="space-between">
          <GradientMenu
            display={!matches}
            menuItems={menuItems}
            selectedMenu={selectedMenu}
            onSelect={handleMenu}
          />
        </Box>
      </Drawer>
    </Box>
  );
}
