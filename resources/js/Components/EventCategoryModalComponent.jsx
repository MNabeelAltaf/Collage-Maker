import ModelComponent from '@/Components/ModelComponent';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { useEffect } from 'react';
import axios from 'axios';
import SelectCategoriesForEventMultiselect from './SelectCategoriesForEventMultiselect';

const EventCategoryModalComponent = ({ closed, isOpen, href, eventId, categories }) => {

  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState({});

  const [selectedCategories, setSelectedCategories] = useState(categories);

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  const save = () => {
    let categories = selectedCategories.map(cat => cat.id);
    setIsLoading(true);
    const formData = new FormData();
    formData.append('categories', JSON.stringify(categories));
    axios.post(route("get.categories.for.event", { "id": eventId }), formData)
      .then(response => {
        setIsLoading(false);
        setData(prev => ({ ...prev, categories: selectedCategories }))
      })
      .catch(err => {
        console.log(err);
      });

  }

  const cancel = () => {
    closed('');
  }

  useEffect(() => {
    axios.get(route("get.categories.for.event", { "id": eventId })).then(response => {
      setIsLoading(false);
      const selectedCategories = response.data.categories.map(cat => {
        delete cat.pivot;
        return cat;
      });
      setData(prev => ({ ...prev, categories: selectedCategories, event: response.data.event }))
    }).catch(err => {
      console.log(err);
    })
  }
    , []);

  return (
    <ModelComponent href={href} isOpen={isOpen} closed={closed} >
      <Stack sx={{
        flexDirection: "column",
        minHeight: "200px",
      }}>
        {isLoading ? <Stack sx={{ flexDirection: "column", width: "100%" }}>
          <Skeleton animation="wave" height={30} width="100%" style={{ marginBottom: 2 }} />
          <Skeleton animation="wave" height={80} width="100%" style={{ marginBottom: 2 }} />
          <Skeleton animation="wave" height={30} width="100%" style={{ marginBottom: 2 }} />
        </Stack> : <Box sx={{
          alignItems: "flex-start"
        }}>
          <Typography variant='h6'>Categories for {data['event']}</Typography>
          <Box>
            <SelectCategoriesForEventMultiselect allCategories={categories}
              alreadySelectedCategoriesForThisEvent={data['categories']} onChange={handleCategoryChange} />
          </Box>
          <Stack sx={{ flexDirection: "row-reverse", }}>
            <Button variant="outlined" onClick={save}>Save</Button>
            <Button variant="text" onClick={cancel}>Cancel</Button>
          </Stack>
        </Box>}
      </Stack>
    </ModelComponent>
  )
}

export default EventCategoryModalComponent