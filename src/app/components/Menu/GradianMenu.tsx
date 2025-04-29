import React from 'react';
import { Box } from '@mui/material';

interface GradientMenuProps {
  display: boolean;
  menuItems: string[];
  selectedMenu: string;
  onSelect: (index: string) => void;
}

const GradientMenu: React.FC<GradientMenuProps> = ({
  display,
  menuItems,
  selectedMenu,
  onSelect,
}) => {
  return (
    <Box
      gap={{ xs: 4, xl: 6 }}
      flexDirection={{ xs: 'column', md: 'row' }}
      sx={{ display: display ? 'flex' : 'none' }}
    >
      {menuItems.map((item) => {
        const isActive = selectedMenu === item;
        return (
          <Box
            key={item}
            sx={{
              textTransform: 'uppercase',
              fontSize: '14px',
              fontWeight: 700,
              background: isActive
                ? 'linear-gradient(91.47deg, #DA458F -6%, #DA34DD 113.05%)'
                : '#FFF',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
            }}
            onClick={() => onSelect(item)}
          >
            {item}
            <Box
              sx={{
                height: '2px',
                width: '16px',
                mt: '4px',
                ml: '4px',
                display: isActive ? 'block' : 'none',
                background: 'linear-gradient(91.47deg, #DA458F -6%, #DA34DD 113.05%)',
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default GradientMenu;
