import React  from 'react';
import '../styles/Notes/NotesBack.css'
import { CustomTabPanel } from '../components/Notes/Note';
import { BasicTabs } from '../components/Notes/Note';
const Notes = ()=>{
  return (
    <div className='flex'>
    <CustomTabPanel/>
    <BasicTabs/>
    </div>
  );
};

export default Notes;
