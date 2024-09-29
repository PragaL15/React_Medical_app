import {
    Table,
    Thead,
    Tbody,
    Card,
    CardBody,
    Text,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
import '../../styles/Dashboard/appoin.css'

 const PastPrescription = () => {
    return (

<TableContainer>
<Card className='titleCard'>
  <CardBody className='titleCard'>
    <Text>PAST PRESCRIPTION</Text>
  </CardBody>
</Card>
  <Table variant='simple'>
    <Thead>
      <Tr className='rows'>
        <Th className='rows'>S.No</Th>
        <Th className='rows'>rescription</Th>
        <Th className='rows'>Doctor Name</Th>
        <Th className='rows'>Dosage/day</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr className='tabel'>
        <Td>1</Td>
        <Td>dolo</Td>
        <Td>Dr.Harshini</Td>
        <Td isNumeric>4</Td>
      </Tr>
      <Tr className='tabel'>
        <Td>2</Td>
        <Td>yolo</Td>
        <Td>Dr.Raja</Td>
        <Td isNumeric>2</Td>
      </Tr>
      <Tr className='tabel'>
        <Td>3</Td>
        <Td>citracin</Td>
        <Td>Dr.Ramu</Td>
        <Td isNumeric>2</Td>
      </Tr>
      <Tr className='tabel'>
        <Td>4</Td>
        <Td>jamal</Td>
        <Td>Dr.Akash</Td>
        <Td isNumeric>3</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    )
 }   

 export default PastPrescription