import { CardMedia, Typography, Grid, Box, Avatar, Badge, IconButton } from '@mui/material';
import { User } from '../../types/user';
import { motion } from 'framer-motion';
import Image from 'next/image';
import coin from '../../../../public/icon/coin-eth.svg';
import green from '../../../../public/icon/check-available-green.svg';
import red from '../../../../public/icon/check-available-red.svg';
import FavoriteIcon from '@mui/icons-material/Favorite';

type Props = {
  user: User;
};

const colorTier = (tier: unknown) =>
  (tier === 'Epic' && '#DD5AFE, #6366F1') ||
  (tier === 'Common' && '#49DD81, #22B4C6') ||
  (tier === 'Rare' && '#43A6F6, #5868F3') ||
  (tier === 'Mythic' && '#FE5A5A, #F163D2') ||
  (tier === 'Legendary' && '#FE955A, #F1DA63');

const MotionCard = motion(Box);

const ProductCard = ({ user }: Props) => (
  <MotionCard
    sx={{ borderRadius: '10px', padding: '16px', backgroundColor: '#3A384199' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <Box sx={{ borderRadius: '4px', background: `linear-gradient(90deg,${colorTier(user.tier)})` }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: '8px',
          '& span, svg': {
            color: '#FFF',
            fontWeight: 500,
          },
        }}
      >
        <Box sx={{ borderRadius: '4px', padding: '4px 12px', backgroundColor: '#313B4580' }}>
          <Typography variant="caption">{user.tier}</Typography>
        </Box>
        <IconButton sx={{ padding: 0 }}>
          <FavoriteIcon />
        </IconButton>
      </Box>
      <CardMedia
        component="img"
        height="197"
        image={user.image}
        alt={user.name}
        sx={{ objectFit: 'contain' }}
      />
    </Box>
    <Box
      sx={{
        mt: 3,
        '& p, span': {
          color: '#FFF',
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography sx={{ fontWeight: 600 }}>{user.name}</Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Image src={coin} alt="coin" width={8} height={13} />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {user.price} ETH
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box display="flex" alignItems="center" gap={1}>
            <Badge
              badgeContent={
                <Image
                  src={
                    (user.author.available === 0 && green) || (user.author.available === 1 && red)
                  }
                  alt="available"
                  width={12}
                  height={12}
                />
              }
              overlap="circular"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <Avatar
                alt={user.author.name}
                src={user.author.avatar}
                sx={{ width: 32, height: 32 }}
              />
            </Badge>
            <Typography variant="caption" sx={{ fontWeight: 500 }}>
              {user.author.name}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </MotionCard>
);

export default ProductCard;
