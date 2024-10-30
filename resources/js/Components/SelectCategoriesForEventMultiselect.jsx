import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from 'react';
import { useEffect } from 'react';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SelectCategoriesForEventMultiselect({ alreadySelectedCategoriesForThisEvent, allCategories, onChange }) {

  const [selectedCategories, setSelectedCategories] = useState([...alreadySelectedCategoriesForThisEvent.map(asc =>
    allCategories[allCategories.findIndex(ac => ac.id === asc.id && ac.name === asc.name)]
  )]);

  useEffect(() => {
    onChange(alreadySelectedCategoriesForThisEvent);
  }, [])

  const handleSelectionChange = (event, newValue) => {
    setSelectedCategories(newValue);
    onChange(newValue);
  };

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={allCategories}
      disableCloseOnSelect
      value={selectedCategories}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name}
          </li>
        );
      }}
      style={{ margin: "25px 0px" }}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder="Categories" />
      )}
      onChange={handleSelectionChange}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];
