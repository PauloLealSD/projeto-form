import { Select, MenuItem } from '@material-ui/core';
//import { nationalityList } from './nationalities';


function NationalityDropdown() {
    const [nationality, setNationality] = useState('');
    
    const handleNationalityChange = (event) => {
      setNationality(event.target.value);
    };
    
    return (
      <Select value={nationality} onChange={handleNationalityChange}>
        {nationalityList.map((nationality) => (
          <MenuItem key={nationality.code} value={nationality.code}>
            {nationality.name}
          </MenuItem>
        ))}
      </Select>
    );
  }
  