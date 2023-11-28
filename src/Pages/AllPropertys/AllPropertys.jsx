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
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useLoaderData } from 'react-router-dom/dist';
import Build from '../Home/Tabs/Build';
import Banner from '../Home/Banner/Banner';

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




const AllPropertys = () => {

    const houses = useLoaderData();
    const tab1 = houses.filter(house => house.category === "Sale")
    const tab2 = houses.filter(house => house.category === "Rent")
    const tab3 = houses.filter(house => house.category === "Residential")
    const tab4 = houses.filter(house => house.category === "Apartment")
    const tab5 = houses.filter(house => house.category === "Condos")
    const tab6 = houses.filter(house => house.category === "  Studios")
    const tab7 = houses.filter(house => house.category === "Commercial")
    const tab8 = houses.filter(house => house.category === "Shop")
    const tab9 = houses.filter(house => house.category === "Apartment")
    const tab10 = houses.filter(house => house.category === "Rent")
    const tab11 = houses.filter(house => house.category === "Condos")

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    useEffect(() => {
        Aos.init();
    })

    return (
        <>
            <Banner/>
            <div className="container mx-auto">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab className='hover:text-[#BC8664]' label="For Sale" icon={<FaHome fontSize="large" />}  {...a11yProps(0)} />
                            <Tab className='hover:text-[#BC8664]' icon={<ImHome3 fontSize="large" />} label="For Rent" {...a11yProps(1)} />
                            <Tab className='hover:text-[#BC8664]' icon={<TfiHome fontSize="large" />} label="Residential" {...a11yProps(2)} />
                            <Tab className='hover:text-[#BC8664]' label="Apartments" icon={<HiHomeModern fontSize="large" />}  {...a11yProps(3)} />
                            <Tab className='hover:text-[#BC8664]' icon={<RiHomeOfficeLine fontSize="large" />} label="Condos" {...a11yProps(4)} />
                            <Tab className='hover:text-[#BC8664]' icon={<SiHomeassistantcommunitystore fontSize="large" />} label="  Studios" {...a11yProps(5)} />
                            <Tab className='hover:text-[#BC8664]' icon={<ImHome3 fontSize="large" />} label="commercial" {...a11yProps(6)} />
                            <Tab className='hover:text-[#BC8664]' label="Shop" icon={<FaHome fontSize="large" />}  {...a11yProps(7)} />
                            <Tab className='hover:text-[#BC8664]' icon={<HiHomeModern fontSize="large" />} label="Apartment" {...a11yProps(8)} />
                            <Tab className='hover:text-[#BC8664]' icon={<SiHomeassistantcommunitystore fontSize="large" />} label="Rent" {...a11yProps(9)} />
                            <Tab className='hover:text-[#BC8664]' icon={<TfiHome fontSize="large" />} label="Condos" {...a11yProps(10)} />


                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-1'>
                            {
                                tab1.map(house => <Build
                                    key={house._id}
                                    house={house}
                                ></Build>)
                            }
                        </div>
                    </CustomTabPanel>

                    <CustomTabPanel value={value} index={1}>
                        <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-1'>
                            {
                                tab2.map(house => <Build
                                    key={house._id}
                                    house={house}
                                ></Build>)
                            }
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-1'>
                            {
                                tab3.map(house => <Build
                                    key={house._id}
                                    house={house}
                                ></Build>)
                            }
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                        <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-1'>
                            {
                                tab4.map(house => <Build
                                    key={house._id}
                                    house={house}
                                ></Build>)
                            }
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={4}>
                        <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-1'>
                            {
                                tab5.map(house => <Build
                                    key={house._id}
                                    house={house}
                                ></Build>)
                            }
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={5}>
                        <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-1'>
                            {
                                tab6.map(house => <Build
                                    key={house._id}
                                    house={house}
                                ></Build>)
                            }
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={6}>
                        <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-1'>
                            {
                                tab7.map(house => <Build
                                    key={house._id}
                                    house={house}
                                ></Build>)
                            }
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={7}>
                        <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-1'>
                            {
                                tab8.map(house => <Build
                                    key={house._id}
                                    house={house}
                                ></Build>)
                            }
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={8}>
                        <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-1'>
                            {
                                tab9.map(house => <Build
                                    key={house._id}
                                    house={house}
                                ></Build>)
                            }
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={9}>
                        <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-1'>
                            {
                                tab10.map(house => <Build
                                    key={house._id}
                                    house={house}
                                ></Build>)
                            }
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={10}>
                        <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-1'>
                            {
                                tab11.map(house => <Build
                                    key={house._id}
                                    house={house}
                                ></Build>)
                            }
                        </div>
                    </CustomTabPanel>

                </Box>
            </div>





        </>
    );
};

export default AllPropertys;