import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Spacer, Image, Box, MenuList, MenuItem, useDisclosure, MenuButton, Menu } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    //position={"fixed"}
    <Box p="0.2px" zIndex="5"  w="100%">
      <Flex
        display={["none", "flex"]}
        alignItems="center"
        gap="20px"
        bgColor="#0f0617"
      >
        <Image
          h="70px"
          w="70px"
          src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.65"
          alt=""
        />
        <Box
          color="white"
          gap="170px"
          fontSize="22px"
          display={{ base: "none", md: "none", lg: "flex" }}
        >
          <NavLink to="/role" style={({ isActive }) => (isActive ? active : base)}>
            Role
          </NavLink>
          <NavLink to="/data" style={({ isActive }) => (isActive ? active : base)}>
            Insert Data
          </NavLink>
          <NavLink to="/plan" style={({ isActive }) => (isActive ? active : base)}>
           Premium User Data
          </NavLink>

          <NavLink to="/edit" style={({ isActive }) => (isActive ? active : base)}>
            Edit
          </NavLink>
          <NavLink to="/delete" style={({ isActive }) => (isActive ? active : base)}>
           Remove Data
          </NavLink>
        </Box>
        <Spacer />
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
           <Menu isOpen={isOpen} ml="200px" >
            <MenuButton
              rightIcon={<ChevronDownIcon />}
              color="white"
              bgColor="#0f0617"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            >
              <ion-icon name="apps-outline"></ion-icon>
            </MenuButton>
           <MenuList
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              bgColor="#0f0617"
              w="200px"
              color="white"
              borderColor="#0f0617"
              // display={{ sm: "none" }}
              mt="15px"
              boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            >
              <Box ml="25px" color="white" fontWeight={"bold"}>
                <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                  Web Series
                </MenuItem>
                <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                  News
                </MenuItem>
                <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                  Eduauraa
                </MenuItem>
                <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                  Premimum
                </MenuItem>
                <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                  News
                </MenuItem>
                <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                  Live TV
                </MenuItem>
                <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                  Music
                </MenuItem>
                <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                  Rent
                </MenuItem>
                <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                  Kids
                </MenuItem>
                <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                  Videos
                </MenuItem>
              </Box>
            </MenuList>
            </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

