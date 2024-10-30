import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Stack, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const options = ['Default', 'Title', 'Date'];

export default function SortEventsBar() {

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [sortOrder, setSortOrder] = React.useState(true)

  const handleClick = () => {
    setSortOrder((sortOrder) => !sortOrder);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Stack direction={'row'} sx={{ backgroundColor: "#333", boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}
        variant="contained"
        ref={anchorRef}
        aria-label="Button group with a nested menu"
      >
        <Button sx={{
          width: '130px', fontWeight: "500", fontSize: "1.1em",
          padding: '2px 40px', color: "white", backgroundColor: "#333",
          borderRadius: '0px',
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
          onClick={handleToggle}>{options[selectedIndex]}</Button>
        {/* <Typography variant='h4'>Sort by</Typography> */}
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleClick}

          sx={{
            width: '20px', fontWeight: "500", fontSize: "1.1em",
            padding: '2px 0px', color: "white", backgroundColor: "#333",
            borderRadius: '0px',
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          {sortOrder && <ArrowDownwardIcon sx={{ color: "white" }} />}
          {!sortOrder && <ArrowUpwardIcon sx={{ color: "white" }} />}
        </Button>
      </Stack>
      <Popper
        sx={{ zIndex: 1, width: "193px" }}
        open={open}
        placement={'bottom-start'}
        anchorEl={anchorRef.current}
        role={undefined}
        transition

      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
