import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { auth } from "strateegia-api";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  const [paperToken, setPaperToken] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (paperToken) {
        console.log(paperToken);
        localStorage.setItem("paperToken", paperToken);
        navigate("/main");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
    }
  };

  function handleChange(event) {
    const { value } = event.target;
    setPaperToken(value);
  }

  useEffect(() => {
    if (localStorage.getItem("paperToken")) {
      localStorage.removeItem("paperToken");
    }
  }, []);

  return (
    <Flex minH={"100vh"} align={"top"} justify={"start"}>
      {/* <ColorModeSwitcher /> */}
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        {/* <Stack align={'center'}>
          <Heading fontSize={'2xl'}>strateegia caixa morfológica</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            entre com seu login de strateegia
          </Text>
        </Stack> */}
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          // boxShadow={'lg'}
          p={8}
        >
          <form onSubmit={handleSubmit} id="login-form">
            <Stack spacing={4}>
              <FormControl id="paperToken">
                <FormLabel>coloca aqui o token do papel</FormLabel>
                <Input name="paperToken" onChange={handleChange} />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"#3C69EB"}
                  color={"white"}
                  _hover={{
                    bg: "blue.400",
                  }}
                  type="submit"
                >
                  entrar
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
