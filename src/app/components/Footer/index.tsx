import { Box, Button, Divider, Grid, Link, TextField, Typography } from '@mui/material';
import { contact, navigation, policy } from '@/app/public/footer';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box sx={{ background: '#17161A', '& h6, p, a, svg, input': { color: '#FFF' } }}>
      <Box
        display="flex"
        flexDirection="column"
        gap={5}
        sx={{ maxWidth: 1600, margin: 'auto', padding: { xs: '40px 16px', md: '40px 24px' } }}
      >
        <Grid container spacing={{ xs: 5, md: 1 }} justifyContent="center">
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box display="flex" flexDirection="column" gap={{ xs: 2, md: 4 }}>
              <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>
                Navigation
              </Typography>
              <Grid container spacing={1.5}>
                {navigation.map((item) => (
                  <Grid key={item.id} size={{ xs: 4 }}>
                    <Link color="textPrimary" underline="hover" href={item.href}>
                      {item.title}
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box display="flex" flexDirection="column" gap={{ xs: 2, md: 4 }}>
              <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>Contact us</Typography>
              <Grid container spacing={{ xs: 1.5, md: 3 }}>
                {contact.map((item) => (
                  <Grid key={item.id} size={{ xs: 12 }}>
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Image src={item.icon} alt={item.title} />
                      <Link color="textPrimary" underline="hover" href={item.href}>
                        {item.title}
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 8, md: 5 }}>
            <Box display="flex" flexDirection="column" gap={{ xs: 2, md: 4 }}>
              <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>
                Subcribe to receive our latest update
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 8 }}>
                  <TextField
                    fullWidth
                    placeholder="Your email address"
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#FFF',
                        },
                        '&:hover fieldset': {
                          borderColor: '#FFF',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#FFF',
                        },
                      },
                      input: { color: '#FFF' },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 4 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      textTransform: 'none',
                      fontWeight: 600,
                      background: 'linear-gradient(90deg, #DA458F -6%, #DA34DD 113.05%)',
                      boxShadow: '0px 0px 50px 0px #BB4BFF52',
                    }}
                  >
                    Subcribe
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ background: '#3A3841' }} />
        <Box
          display="flex"
          flexDirection={{ xs: 'column-reverse', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography>©2023 Tyme - Edit. All Rights reserved.</Typography>
          <Box display="flex" gap={{ xs: 5, md: 6 }}>
            {policy.map((item) => (
              <Link key={item.id} color="textPrimary" underline="hover" href={item.href}>
                {item.title}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
