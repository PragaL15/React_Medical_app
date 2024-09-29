import {Stack , Card , Image , CardBody , Heading,Text , CardFooter,Button,} from '@chakra-ui/react';
import '../../styles/Dashboard/personal.css'

const PersonalDetails = () =>{
 
return(
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  maxW={{ base: '90%', sm: '980px' }} 
>
  {/* <Image className='image'
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  /> */}

  <Stack className='bodyof'>
    <CardBody >
      <Heading size='md'>Personal Details</Heading>

      <Text py='2'>
       Name: 
      </Text>
      <Text py='2'>
       Age:
      </Text>
      <Text py='2'>
        Mobile Number:
      </Text>
      <Text py='2'>
        Attendent Doctors:
      </Text>
      <Text py='2'>
        Diaganosed Problem:
      </Text>
    </CardBody>

  </Stack>
</Card>
)
}
export default PersonalDetails