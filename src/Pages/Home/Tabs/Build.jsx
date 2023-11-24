import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { FaHome } from "react-icons/fa";
import Box from '@mui/material/Box';
import { ImHome3 } from "react-icons/im";
import { TfiHome } from "react-icons/tfi";
import { HiHomeModern } from "react-icons/hi2";
import { RiHomeOfficeLine } from "react-icons/ri";
import { SiHomeassistantcommunitystore } from "react-icons/si";






function CustomTabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className='hover:text-[#BC8664]'  label="For Sale" icon={<FaHome fontSize="large"/>}  {...a11yProps(0)} />
          <Tab icon={<ImHome3 fontSize="large" className='hover:text-[#BC8664]' />} label="Item Two" {...a11yProps(1)} />
          <Tab icon={<TfiHome fontSize="large" className='hover:text-[#BC8664]' />} label="Item Three" {...a11yProps(2)} />
          <Tab className='hover:text-[#BC8664]'  label="For Sale" icon={<HiHomeModern fontSize="large"/>}  {...a11yProps(3)} />
          <Tab icon={<RiHomeOfficeLine fontSize="large" className='hover:text-[#BC8664]' />} label="Item Two" {...a11yProps(4)} />
          <Tab icon={<SiHomeassistantcommunitystore fontSize="large" className='hover:text-[#BC8664]' />} label="Item Three" {...a11yProps(5)} />
          <Tab icon={<ImHome3 fontSize="large" className='hover:text-[#BC8664]' />} label="Item Three" {...a11yProps(6)} />
          <Tab className='hover:text-[#BC8664]'  label="For Sale" icon={<FaHome fontSize="large"/>}  {...a11yProps(7)} />
          <Tab icon={<HiHomeModern fontSize="large" className='hover:text-[#BC8664]' />} label="Item Two" {...a11yProps(8)} />
          <Tab icon={<SiHomeassistantcommunitystore fontSize="large" className='hover:text-[#BC8664]' />} label="Item Three" {...a11yProps(9)} />
          <Tab icon={<TfiHome fontSize="large" className='hover:text-[#BC8664]' />} label="Item Three" {...a11yProps(10)} />
         
          
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={9}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={10}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={11}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}