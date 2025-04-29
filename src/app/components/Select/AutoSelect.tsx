import { Autocomplete, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

interface OptionType {
  label: string;
  value?: string | number;
}

interface AutoSelectProps {
  options: OptionType[];
  defaultValue?: OptionType;
  placeholder?: string;
}

const StyledAutocomplete = styled(Autocomplete)({
  '& .MuiOutlinedInput-root': {
    color: '#FFFFFF', // màu chữ
    '& fieldset': {
      borderColor: '#3A3841', // viền thường
    },
    '&:hover fieldset': {
      borderColor: '#3A3841', // viền khi hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3A3841', // viền khi focus
    },
  },
  '& .MuiInputLabel-root': {
    color: '#FFFFFF',
    '&.Mui-focused': {
      color: '#FFFFFF',
    },
  },
  '& .MuiSvgIcon-root': {
    color: '#D6D6D6', // icon dropdown
  },
  '& .MuiAutocomplete-popupIndicator': {
    color: '#D6D6D6', // nút mở popup
  },
  '& .MuiAutocomplete-clearIndicator': {
    color: '#D6D6D6', // nút clear
  },
});

export default function AutoSelect({ options, defaultValue, placeholder }: AutoSelectProps) {
  return (
    <StyledAutocomplete
      disablePortal
      options={options || []}
      defaultValue={defaultValue}
      // getOptionLabel={(option) => option.label}
      renderInput={(params) => <TextField {...params} placeholder={placeholder} size="small" />}
    />
  );
}
