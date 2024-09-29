import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Card,
    CardBody,
    Text,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

  import '../../styles/Dashboard/appoin.css'


const UpcommingReport= () => {
  return (
<TableContainer>
<Card className='titleCard'>
  <CardBody className='titleCard'>
    <Text>UPCOMMING APPOINMENTS</Text>
  </CardBody>
</Card>
      
  <Table variant='simple'>
    <Thead>
   
      <Tr className='rows'> 
        <Th className='rows'> S.No</Th>
        <Th className='rows'> Due Date</Th>
        <Th className='rows'> Doctor Name</Th>
        <Th isNumeric className='rows'>No of visit</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td className='tabel'>1</Td>
        <Td className='tabel'>24/05/24</Td>
        <Td className='tabel'>Dr.Kiran</Td>
        <Td isNumeric className='tabel'>5</Td>
      </Tr>
      <Tr>
        <Td className='tabel'>2</Td>
        <Td className='tabel'>27/06/24</Td>
        <Td className='tabel'>Dr.Kumar</Td>
        <Td isNumeric className='tabel'>5</Td>
      </Tr>
      <Tr>
        <Td className='tabel'>3</Td>
        <Td className='tabel'>29/07/24</Td>
        <Td className='tabel'>Dr.Somu</Td>
        <Td isNumeric className='tabel'>5</Td>
      </Tr>
      <Tr>
        <Td className='tabel'>4</Td>
        <Td className='tabel'>23/09/24</Td>
        <Td className='tabel'>Dr.Raja</Td>
        <Td isNumeric className='tabel'>5</Td>
      </Tr>
    </Tbody>
    
  </Table>
</TableContainer>
);
};
export default UpcommingReport;