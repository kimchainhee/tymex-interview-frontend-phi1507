'use client';
import { useEffect, useState } from 'react';
import { CircularProgress, Box, Alert, Grid, IconButton, Drawer } from '@mui/material';
import { fetchUsers } from '../services/userService';
import { User } from '../types/user';
import { useDebounce } from '../hooks/useDebounce';
import ViewMoreButton from '../components/Button/ViewMoreProduct';
import ProductCard from '../components/Card/ProductCard';
import FilterSidebar from '../components/Filter/FilterSidebar';
import CateSwiper from '../components/Swiper/CateSwiper';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(16);
  const [filterMobi, setFilterMobi] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        // console.log('Fetched data:', data);
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

  const filteredUsers = Array.isArray(users)
    ? users.filter((user) => user.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
    : [];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Box
      display="flex"
      gap={5}
      sx={{ maxWidth: 1600, margin: 'auto', padding: { xs: '40px 16px', md: '40px 24px' } }}
    >
      <FilterSidebar
        search={searchTerm}
        display={matches}
        handleSearch={handleSearch}
        handleCloseSearch={() => {}}
      />
      <Box display="flex" flexDirection="column" gap={4} sx={{ width: '100%' }}>
        <Box display="flex" gap={2} sx={{ paddingRight: !matches ? '56px' : '0px' }}>
          <IconButton
            sx={{
              display: !matches ? 'flex' : 'none',
              borderRadius: '4px',
              background: 'linear-gradient(91.47deg, #da458f -6%, #da34dd 113.05%)',
              '& svg': { color: '#FFF' },
            }}
            onClick={() => setFilterMobi(true)}
          >
            <FilterAltIcon />
          </IconButton>
          <CateSwiper />
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
        <Grid container spacing={4}>
          {filteredUsers.slice(0, visibleCount).map((user) => (
            <Grid key={user.id} size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
              <ProductCard user={user} />
            </Grid>
          ))}
        </Grid>
        <br />
        {!loading && !error && filteredUsers.length > visibleCount && (
          <ViewMoreButton onClick={() => setVisibleCount((prev) => prev + 12)} />
        )}
      </Box>
      <Drawer
        open={filterMobi}
        onClose={() => setFilterMobi(false)}
        sx={{
          '.MuiDrawer-paper': { padding: 2, backgroundColor: '#17161A' },
        }}
      >
        <FilterSidebar
          search={searchTerm}
          display={!matches}
          handleSearch={handleSearch}
          handleCloseSearch={() => setFilterMobi(false)}
        />
      </Drawer>
    </Box>
  );
}
