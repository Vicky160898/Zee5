import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Spacer, Image, Box } from "@chakra-ui/react";
export const Navbar = () => {
  const base = {
    color: "grey",
    paddingBottom: "4px",
    borderBottom: "none",
  };
  const active = {
    color: "white",
    alignItems: "center",
  };
  return (
    <Box p="0.2px" zIndex="5" position={"fixed"} w="100%">
      <Flex
        display={["none", "flex"]}
        alignItems="center"
        gap="20px"
        bgColor="#0f0617"
      >
        <Image
          h="80px"
          w="80px"
          src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.65"
          alt=""
        />
        <Box
          color="white"
          gap="400px"
          display={{ base: "none", md: "none", lg: "flex" }}
        >
          <NavLink to="/role" style={({ isActive }) => (isActive ? active : base)}>
            Home
          </NavLink>

          <NavLink to="/plan" style={({ isActive }) => (isActive ? active : base)}>
            Role
          </NavLink>

          <NavLink to="/edit" style={({ isActive }) => (isActive ? active : base)}>
            Edit
          </NavLink>
          <NavLink to="/delete" style={({ isActive }) => (isActive ? active : base)}>
            User Data
          </NavLink>
        </Box>
        <Spacer />
        <Box
          color="white"
          w={{ md: "120px", lg: "130px" }}
          // display={{sm:"none"}}
          h="30px"
          borderRadius="5px"
          backgroundColor="#8230c6"
          margin="20px"
          pt="2px"
          alignContent="center"
        >
          PREMIMUM
        </Box>
      </Flex>
      <Flex
        bgColor={"#0f0617"}
        h="50px"
        px="10px"
        alignItems={"center"}
        justifyContent="space-between"
        display={["flex", "none"]}
        position={"fixed"}
        w="100%"
      >
        <Flex alignItems="center">
          <Image
            h="40px"
            src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.65"
            alt=""
          />
          <Box
            color="white"
            w="fit-content"
            borderRadius="5px"
            backgroundColor="#8230c6"
            px="20px"
            py="5px"
            ml="20px"
            alignContent="center"
          >
            Buy Plan
          </Box>
        </Flex>
        {/* <Flex alignItems="center">

          <DrawerE />
       </Flex>  */}
      </Flex>
    </Box>
  );
};

