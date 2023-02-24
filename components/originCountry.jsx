import { Select, MenuItem } from '@material-ui/core';
import { nationalityList } from './nationalities';


export function NationalityDropdown() {
    const [nationality, setNationality] = useState('');
    
    const handleNationalityChange = (event) => {
      setNationality(event.target.value);
    };
    
    return (
      <Select margin="normal" value={nationality} onChange={handleNationalityChange}>
        {nationalityList.map((nationality) => (
          <MenuItem key={nationality.code} value={nationality.code}>
            {nationality.name}
          </MenuItem>
        ))}
      </Select>
    );
  }
  