import { TableContainer, Tr, Thead, Tbody, Td, Th, Table } from "@chakra-ui/react";
import '../../styles/AppoinmentPage/AppTable.css';

const AppTable = () => {
  return (
    <TableContainer className="table"> 
      <Table size='sm'>
        <Thead>
          <Tr className="row">
            <Th className="row">S.No</Th>
            <Th className="row">Doctor Name</Th>
            <Th className="row">Department</Th>
            <Th className="row">Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className="inside"> 
            <Td className="inside">1</Td>
            <Td className="inside">Dr. Pragalya</Td>
            <Td className="inside">Pediatric</Td>
            <Td className="inside">25.4.2026</Td>
          </Tr>
          <Tr className="inside"> 
            <Td className="inside">2</Td>
            <Td className="inside">Dr. Rithika</Td>
            <Td className="inside">Ortho</Td>
            <Td className="inside">25.9.2026</Td>
          </Tr>
          <Tr className="inside">
            <Td className="inside">3</Td>
            <Td className="inside">Dr. Harshini</Td>
            <Td className="inside">Gyneac</Td>
            <Td className="inside">29.9.2026</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AppTable;
