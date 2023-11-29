import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Body() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
  {/* Yellow Banner */}
  <Box sx={{ 
    position: 'absolute', 
    top: '20px', // Adjust top as needed
    backgroundColor: 'yellow', 
    padding: '10px', 
    borderRadius: '5px',
    marginTop:6,
    zIndex: 10 // Ensure it's above the card
  }}>
    <Typography variant="h6" sx={{ color: 'black', textAlign: 'center' }}>
      50%OFF for the first ride
    </Typography>
    <Typography variant="body1" sx={{ color: 'black', textAlign: 'center' }}>
      *Discount limit 1,000yen
    </Typography>
  </Box>
    <Card sx={{ 
        width: 500, 
        backgroundColor: '#784BC8', 
        mt: -8, 
        position: 'relative', 
        overflow: 'visible',
        minHeight: '60vh', // Set a minimum height for the card
        display: 'flex',
        flexDirection: 'column',
        
      }}> 
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{ 
            backgroundColor: 'rgba(241,240,250,1.00)', 
            '.MuiTabs-indicator': { backgroundColor: 'transparent' },
            '.MuiTab-root': {
              color: 'black', 
              '&.Mui-selected': {
                color: 'white', 
                backgroundColor: '#784BC8',
              },
              '&:hover': {
                backgroundColor: 'rgba(200, 200, 200, 0.2)',
              },
            },
          }}
        >
          <Tab label="To Airport" sx={{ width: '50%', mr: 0.5 }} />
          <Tab label="From Airport" sx={{ width: '50%', ml: 0.5 }} />
        </Tabs>
       

<CardContent>
<TabPanel value={value} index={0}>
  <Typography variant="h6" gutterBottom sx={{ color: 'white', fontSize: '1rem' }}>
    To the Airport
  </Typography>
  <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
  <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
    <FlightTakeoffIcon sx={{ color: 'white', marginTop:3, paddingRight:1 }} />
    <FormControl margin="normal" variant="standard" sx={{ minWidth: 120,  '.MuiInput-underline:before': { borderBottomColor: 'white' } }}>
      <InputLabel sx={{ color: 'white' }}>Airport</InputLabel>
      <Select 
        defaultValue="Haneda Airport" 
        sx={{ color: 'white', '.MuiSvgIcon-root': { color: 'white' } }}
      >
        <MenuItem value="Haneda Airport">Haneda Airport</MenuItem>
        {/* Add more airports here */}
      </Select>
    </FormControl>
  </Box>
  <FormControl margin="normal" variant="standard" sx={{ minWidth: 120, '.MuiInput-underline:before': { borderBottomColor: 'white' } }}>
    <InputLabel sx={{ color: 'white' }}>Input terminal</InputLabel>
    <Select 
      defaultValue="" 
      sx={{ color: 'white', '.MuiSvgIcon-root': { color: 'white' } }}
    >
      {/* Add terminal options here */}
    </Select>
  </FormControl>
</Box>


  <Box sx={{ position: 'relative', mt: 2, width: '100%' }}>
  <Box sx={{ position: 'absolute', left: '40px' }}> {/* Adjust left value as needed */}
    <FormControl variant="standard" sx={{ minWidth: 360 }}>
      <TextField
        id="pickup-location"
        label="Pickup Location"
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon sx={{ color: 'white' }} /> {/* Icon color set to white */}
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: { color: 'white' }
        }}
        sx={{ 
          width: '100%', 
          '.MuiInputBase-input': { color: 'white' }, 
          '.MuiInput-underline:before': { borderBottomColor: 'white' },
          '.MuiInput-underline:after': { borderBottomColor: 'white' }
        }}
      />
    </FormControl>
  </Box>
</Box>




</TabPanel>

<TabPanel value={value} index={1}>
  <Typography variant="h6" gutterBottom sx={{ color: 'white', fontSize: '1rem' }}>
    From the Airport
  </Typography>
  <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
    <FormControl margin="normal" variant="standard" sx={{ minWidth: 120, '.MuiInput-underline:before': { borderBottomColor: 'white' } }}>
      <InputLabel sx={{ color: 'white' }}>Airport</InputLabel>
      <Select defaultValue="Haneda Airport" sx={{ color: 'white' }}>
        <MenuItem value="Haneda Airport">Haneda Airport</MenuItem>
        {/* Add more airports here */}
      </Select>
    </FormControl>
    
    <FormControl margin="normal" variant="standard" sx={{ minWidth: 120, '.MuiInput-underline:before': { borderBottomColor: 'white' } }}>
      <InputLabel sx={{ color: 'white' }}>Terminal</InputLabel>
      <Select defaultValue="" sx={{ color: 'white' }}>
        {/* Add terminal options here */}
      </Select>
    </FormControl>
  </Box>



  
</TabPanel>
</CardContent>
        <img 
          src="/mascot.png" // Path to your image in the public folder
          alt="Mascot" 
          style={{ 
            position: 'absolute', 
            bottom: '-100px', // Adjust as needed
            right: '-100px', // Adjust as needed
            maxWidth: '200px', // Adjust the size as needed
            maxHeight: '200px' 
          }} 
        />
      </Card>
    </Box>
  );
}

