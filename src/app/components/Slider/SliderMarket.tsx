import { Slider } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SliderMarketProps {
  value: [number, number];
  onChange: (event: Event, newValue: number | number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  valueLabelFormat?: (value: number) => string;
}

const GradientRangeSlider = styled(Slider)(({}) => ({
  color: '#3A3841',
  height: 8,
  padding: '13px 0',
  '& .MuiSlider-rail': {
    backgroundColor: '#3A3841',
    opacity: 1,
    height: 8,
    borderRadius: 2,
  },
  '& .MuiSlider-track': {
    height: 8,
    border: 0,
    backgroundImage:
      'linear-gradient(91.27deg, rgba(218, 69, 143, 0) 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, rgba(218, 52, 221, 0) 102.8%)',
    borderRadius: 4,
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    background: `
      radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 84, 238, 0) 100%),
      radial-gradient(50% 50% at 50% 50%, #F643E4 0%, rgba(255, 84, 238, 0) 100%)
    `,
    border: '1px solid #FFFFFF',
    boxShadow: '0px 0px 16px 3px #DA40A387',
    marginTop: '-1px',
    marginLeft: '-12px',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: '0px 0px 16px 3px #DA40A387',
    },
  },
  '& .MuiSlider-valueLabel': {
    background: 'linear-gradient(91.47deg, #DA458F -6%, #DA34DD 113.05%)',
    color: '#fff',
    borderRadius: '4px',
    fontSize: 12,
    fontWeight: 'bold',
    padding: '6px 8px',
    '&::before': {
      display: 'block',
      position: 'absolute',
      width: 8,
      height: 8,
      background: 'inherit',
      top: '85%',
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)',
      transformOrigin: 'center',
      borderRadius: '2px',
      content: '""',
    },
  },
}));

export default function SliderMarket({
  value,
  onChange,
  min = 0.01,
  max = 200,
  step = 0.01,
  valueLabelFormat,
}: SliderMarketProps) {
  return (
    <GradientRangeSlider
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      valueLabelDisplay="auto"
      valueLabelFormat={valueLabelFormat}
      getAriaLabel={() => 'Price range'}
      disableSwap
    />
  );
}
