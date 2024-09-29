import React from 'react';
import AppTable from '../components/Appoinment/AppTable';
import SideBar from '../components/SideNav';
import '../styles/AppoinmentPage/AppPage.css';
import { Select  } from '@chakra-ui/react'
import { MdArrowDropDown } from 'react-icons/md';
import BreadCrumb from '../components/Appoinment/Bread';

const Appoinment = () => {
  return (
    <div className='com'>
      <div className='SideBar'>
        <SideBar />
      </div>
      <div className='AppTable'>
        <BreadCrumb/>
      <Select icon={<MdArrowDropDown />} placeholder='year filter' />
       <AppTable />
      </div>
    </div>
  );
};

export default Appoinment;
