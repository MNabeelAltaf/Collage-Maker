import { Box, Stack, Typography } from "@mui/material"
import { useEffect } from "react";
import { useState } from "react"
import SortEventsBar from "./SortEventsBar";

const ExistingCategories = ({ events, onClick }) => {
  const [eventsInThisComponents, setEventsInThisComponents] = useState(events);
  useEffect(() => {
    // events.sort((a, b) => a.title.localeCompare(b.title))
    setEventsInThisComponents(events)
  }, [events])

  return (
    <Box sx={{ width: "60%", display: "flex", flexDirection: "column" }}>
      <Stack direction={'row'} sx={{ marginBottom: "20px " }} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant={'h5'}>Existing Events</Typography>
        <SortEventsBar />
      </Stack>
      <Stack sx={{ margin: "0px 0px", flexDirection: "column" }}>
        {eventsInThisComponents.map((eve, index) => (
          <Box key={eve.id}
            sx={{
              backgroundColor: "white", padding: '10px', margin: '5px 0px',
              border: '2px solid #333', borderRadius: "7px",
              transition: "all 300ms ease",
              '&:hover': {
                'background': "#eee",
                cursor: 'pointer'
              }
            }}
            onClick={() => { onClick(eve.id) }}
          >
            <Stack direction={'row'} justifyContent={'space-between'} >
              <Typography variant={'h6'}>{eve.title}</Typography>
              <Stack direction={'row'} alignItems={'center'}>
                <Typography padding={"0px 5px"} variant={'body2'}>{eve.from}</Typography> -
                <Typography padding={"0px 5px"} variant={'body2'}>{eve.to}</Typography>
              </Stack>
            </Stack>
            <Typography variant={'body1'}>{eve.description}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default ExistingCategories