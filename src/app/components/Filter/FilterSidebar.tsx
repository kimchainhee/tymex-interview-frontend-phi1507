'use client';
import { useState } from 'react';
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import AutoSelect from '../Select/AutoSelect';
import { optionTiers, optionThemes, optionTimes, optionPrices } from '@/app/public/filter';
import SliderMarket from '../Slider/SliderMarket';
import CloseIcon from '@mui/icons-material/Close';

interface FilterSidebarProps {
  search: string;
  display: boolean;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCloseSearch: () => void;
}

export default function FilterSidebar({
  search,
  display,
  handleSearch,
  handleCloseSearch,
}: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([70, 150]);

  const handleRangeChange = (_event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as [number, number]);
  };

  const formatValueLabel = (value: number) => `${value.toFixed(2)} ETH`;

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      sx={{ display: display ? 'flex' : 'none', width: '372px' }}
    >
      <Box display="flex" gap={2}>
        <TextField
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#89888B' }} />
                </InputAdornment>
              ),
            },
          }}
          placeholder="Quick search"
          size="small"
          fullWidth
          value={search}
          onChange={handleSearch}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#89888B',
              },
              '&:hover fieldset': {
                borderColor: '#89888B',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#89888B',
              },
            },
            input: { color: '#FFF' },
          }}
        />
        <IconButton
          sx={{
            display: { xs: 'block', md: 'none' },
            borderRadius: '4px',
            background: 'linear-gradient(91.47deg, #da458f -6%, #da34dd 113.05%)',
            height: '40px',
            '& svg': { color: '#FFF' },
          }}
          onClick={handleCloseSearch}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box display="flex" flexDirection="column" gap={{ xs: 1, md: 1.5 }}>
        <Typography sx={{ textTransform: 'uppercase', color: '#FFF' }}>price</Typography>
        <SliderMarket
          value={priceRange}
          onChange={handleRangeChange}
          valueLabelFormat={formatValueLabel}
        />
        <Box display="flex" justifyContent="space-between" sx={{ color: '#D6D6D6' }}>
          <Typography>0.01 ETH</Typography>
          <Typography>200 ETH</Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap={{ xs: 1, md: 1.5 }}>
        <Typography sx={{ textTransform: 'uppercase', color: '#89888B' }}>tier</Typography>
        <AutoSelect
          options={optionTiers}
          defaultValue={optionTiers[0]}
          placeholder="Select an option"
        />
      </Box>
      <Box display="flex" flexDirection="column" gap={{ xs: 1, md: 1.5 }}>
        <Typography sx={{ textTransform: 'uppercase', color: '#89888B' }}>theme</Typography>
        <AutoSelect
          options={optionThemes}
          defaultValue={optionThemes[1]}
          placeholder="Select an option"
        />
      </Box>
      <Box display="flex" flexDirection="column" gap={{ xs: 1, md: 1.5 }}>
        <Typography sx={{ textTransform: 'uppercase', color: '#89888B' }}>time</Typography>
        <AutoSelect
          options={optionTimes}
          defaultValue={optionTimes[0]}
          placeholder="Select an option"
        />
      </Box>
      <Box display="flex" flexDirection="column" gap={{ xs: 1, md: 1.5 }}>
        <Typography sx={{ textTransform: 'uppercase', color: '#89888B' }}>price</Typography>
        <AutoSelect
          options={optionPrices}
          defaultValue={optionPrices[0]}
          placeholder="Select an option"
        />
      </Box>
      <Box
        display="flex"
        gap={2}
        sx={{
          '& button': {
            textTransform: 'none',
            fontWeight: 600,
          },
        }}
      >
        <Button
          variant="text"
          fullWidth
          startIcon={<CancelIcon sx={{ color: '#FBC625' }} />}
          sx={{ color: '#FFF' }}
        >
          Reset filter
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{
            background: 'linear-gradient(90deg, #DA458F -6%, #DA34DD 113.05%)',
            boxShadow: '0px 0px 50px 0px #BB4BFF52',
          }}
          onClick={handleCloseSearch}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}
