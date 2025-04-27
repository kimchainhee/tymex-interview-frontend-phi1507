import { Card, CardContent, Typography } from '@mui/material';
import { User } from '../../types/user';
import { motion } from 'framer-motion';

type Props = {
  user: User;
};

const MotionCard = motion(Card);

const UserCard = ({ user }: Props) => (
  <MotionCard
    sx={{ mb: 2 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <CardContent>
      <Typography variant="h6">{user.name}</Typography>
      <Typography color="text.secondary">{user.email}</Typography>
    </CardContent>
  </MotionCard>
);

export default UserCard;
