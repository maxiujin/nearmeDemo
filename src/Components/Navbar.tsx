import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Navbar() {
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerItems = (
    <Box
      sx={{ width: 250, color: "#784BC8" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['About', 'Price', 'How to Use', 'Service Area', 'Mile'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #4E4BC8' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            sx={{ color: '#784BC8', mr: 2 }}
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerItems}
          </Drawer>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 4 }} />
            <img src="/brand.png" alt="Brand" style={{ height: '50px' }} />
            <Box sx={{ flexGrow: 2 }} />
          </Box>

          <a href="#" style={{ textDecoration: 'none' }}>
            <Typography sx={{ marginRight: 6, color: '#784BC8', cursor: 'pointer' }}>About</Typography>
          </a>
          <a href="https://guide.nearme.jp/f1dd9e40-4a26-4f59-b383-f7cc7ce897bb" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Typography sx={{ marginRight: 5, color: '#784BC8', cursor: 'pointer' }}>Price</Typography>
          </a>
          <a href="#" style={{ textDecoration: 'none' }}>
            <Typography sx={{ marginRight: 4, color: '#784BC8', cursor: 'pointer' }}>How to Use</Typography>
          </a>
      
          <a href="#" style={{ textDecoration: 'none' }}>
            <Typography sx={{ marginRight: 6, color: '#784BC8', cursor: 'pointer' }}>Mile</Typography>
          </a>
          <a href="#" style={{ textDecoration: 'none' }}>
            <Typography sx={{ marginRight: 6, color: '#784BC8', cursor: 'pointer' }}>FAQ</Typography>
          </a>
          <a href="#" style={{ textDecoration: 'none' }}>
            <Typography sx={{ marginRight: 4, color: '#784BC8', cursor: 'pointer' }}>Sign In</Typography>
          </a>

          <IconButton
            size="large"
            edge="end"
            sx={{ color: '#784BC8' }}
            aria-label="language"
            onClick={handleLanguageClick}
          >
            <LanguageIcon />
          </IconButton>
          <Menu
            id="language-menu"
            anchorEl={languageAnchorEl}
            open={Boolean(languageAnchorEl)}
            onClose={handleLanguageClose}
          >
            <MenuItem onClick={handleLanguageClose}>English</MenuItem>
            <MenuItem onClick={handleLanguageClose}>日本語</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
