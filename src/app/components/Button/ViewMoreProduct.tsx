import { Box, Button } from '@mui/material';

interface ViewMoreButtonProps {
  onClick: () => void;
}

export default function ViewMoreButton({ onClick }: ViewMoreButtonProps) {
  return (
    <Box textAlign="center">
      <Button
        variant="contained"
        sx={{
          width: { xs: 200, md: 300 },
          height: '70px',
          textTransform: 'none',
          fontWeight: 600,
          background: 'linear-gradient(90deg, #DA458F -6%, #DA34DD 113.05%)',
          boxShadow: '0px 0px 50px 0px #BB4BFF52',
        }}
        onClick={onClick}
      >
        View more
      </Button>
    </Box>
  );
}
