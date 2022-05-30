import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [info,setInfo] = React.useState({
    title : "",
    category : '',
    gender : '',
    price : ''
  })

  
  const handleSumbit = ()=>{
    axios.post("http://localhost:8080/products",info).then((res)=>alert("data Stored"))
  }

  const handleChange =(e)=>{
    const {name,value} = e.target
    setInfo({...info,[name] : value})
  }
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen} size='lg' width='fit-content' margin='auto'>
        Add New Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
       
        <ModalBody pb={6}>
          <label>Title</label>
          <Input data-cy="add-product-title" name = 'title' value = {info.name} onChange = {handleChange}/>
          <label>Category</label>
          <Select data-cy="add-product-category" name = "category" value = {info.category} onChange = {handleChange}>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <label>Gender</label>
          <RadioGroup data-cy="add-product-gender" name = "gender" value = {info.gender} onChange = {handleChange}>
            <Radio data-cy="add-product-gender-male" value = 'male'>Male</Radio>
            <Radio data-cy="add-product-gender-female" value = 'female'>Female</Radio>
            <Radio data-cy="add-product-gender-unisex" value = 'unisex'>Unisex</Radio>
          </RadioGroup>
          <label>Price</label>
          <Input data-cy="add-product-price" placeholder="price" name = 'price' value = {info.price} onChange = {handleChange}/>
          <Button data-cy="add-product-submit-button" onClick = {handleSumbit}>Submit</Button>
        </ModalBody>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
      </Modal>
    </>
  );
};

export default AddProduct;
