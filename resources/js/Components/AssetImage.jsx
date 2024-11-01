import { Box, Card, Stack, Typography } from '@mui/material'
import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import NavLink from '@/Components/NavLink';

const AssetImage = ({ src, title, uni, index, handleRemoveFileInput, isSingleImage = '', category_name = '', asset_type = '' }) => {
  return (
    <Card sx={{
      width: "300px",
      height: "300px",
      overflow: "hidden",
      margin: "20px",
      position: "relative"
    }}>
      <img src={src} key={index} style={{ objectFit: "fill" }} />
      <Box sx={{ position: "absolute", bottom: "0px", left: "0px", backgroundColor: "white", width: "100%", padding: "10px 15px" }}>
        <Typography variant='h6'>{title}</Typography>
      </Box>
      <Box sx={{
        position: "absolute",
        top: "10px", right: "10px",
        display: "flex",
        flexDirection: "column"
        // backgroundColor: "blue"
      }}>
        <IconButton onClick={() => handleRemoveFileInput(uni)} aria-label="delete">
          <DeleteIcon color='warning' />
        </IconButton>
        {
          !isSingleImage &&
          <NavLink href={route('view.edit.template', { uni })}>
            <IconButton><EditIcon color='primary' /></IconButton>
          </NavLink>
        }
      </Box>
      {
        isSingleImage &&
        <Stack color={'black'}>
          <Typography variant='p'>Category: {category_name}</Typography>
          <Typography variant='p'>Type: {asset_type}</Typography>
        </Stack>
      }
    </Card>
  )
}

export default AssetImage