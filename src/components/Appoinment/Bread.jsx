import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import '../../styles/AppoinmentPage/bread.css';

const breadCrumb = () => {
return (
  <Breadcrumb
    className="breadcrumb"
    spacing={{ base: '4px', md: '8px', lg: '16px' }} // Adjust spacing for different screen sizes
    separator={<ChevronRightIcon color="gray.500" />}
  >
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="#">About</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href="#">Contact</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);
};

export default breadCrumb;
