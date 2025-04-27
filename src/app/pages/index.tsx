'use client';
import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  Alert,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { fetchUsers } from '../services/userService';
import UserCard from '../components/Card/UserCard';
import { User } from '../types/user';
import { useDebounce } from '../hooks/useDebounce';

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError('Lỗi khi tải dữ liệu người dùng.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();

    const interval = setInterval(loadUsers, 60000); // Refresh mỗi 60s
    return () => clearInterval(interval); // Clear khi unmount
  }, []);

  const debouncedSearch = useDebounce(searchTerm, 1000);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Box display="flex" flexDirection="column" gap={2} mb={3}>
        <Typography variant="h4" align="center">
          Danh sách người dùng
        </Typography>
        <TextField
          label="Tìm kiếm theo tên"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      {loading && (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ my: 2 }}>
          {error}
        </Alert>
      )}

      {!loading && !error && users.length === 0 && (
        <Alert severity="info">Không có người dùng nào.</Alert>
      )}

      <Grid container spacing={2}>
        {filteredUsers.slice(0, visibleCount).map((user) => (
          <Grid key={user.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>

      {!loading && !error && filteredUsers.length > visibleCount && (
        <Box textAlign="center" mt={2}>
          <Button variant="contained" onClick={() => setVisibleCount((prev) => prev + 5)}>
            Xem thêm
          </Button>
        </Box>
      )}
    </Container>
  );
}
