import React from "react";
import { NavLink } from "react-router-dom";
import {
  Flex,
  Spacer,
  Input,
  Image,
  Box,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  useDisclosure,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import DrawerE from "./NavbarCom";
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
        <Box color="white" gap="20px" display={{ base: "none", md: "none" ,lg:"flex"}}>
          <NavLink to="#" style={({ isActive }) => (isActive ? active : base)}>
            Home
          </NavLink>

          <NavLink to="#" style={({ isActive }) => (isActive ? active : base)}>
            TV Shows
          </NavLink>

          <NavLink to="#" style={({ isActive }) => (isActive ? active : base)}>
            Movies
          </NavLink>
        </Box>
        <Flex>
          <Menu isOpen={isOpen}>
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
              ml="-80px"
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

        <Spacer />
        <InputGroup w={{md:"250px",lg:"360px"}} color="white" >
          <InputLeftElement
            pointerEvents="none"
            color="white"
            fontSize="1.2em"
            children={<Search2Icon color="gray.300" />}
           
          />
          <Input focusBorderRadius="0.5px" placeholder="Enter amount" />
        </InputGroup>

        <Box color="white" borderRadius="50%">
          <i class="fa-solid fa-user"></i>
        </Box>
        <Box color="white">
          <ion-icon name="language-outline"></ion-icon>
        </Box>
        <Box
          color="white"
          w={{md:"120px",lg:"130px"}}
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
        <Box color="white">
          <Menu bgColor="#0f0617 " border="none">
            <MenuButton
              as={IconButton}
              bgColor="#0f0617"
              aria-label="Options"
              icon={<HamburgerIcon />}
              w="80px"
              h="40px"
              border="none"
              color="white"
            />
            <MenuList w="300px" bgColor="#0f0617 " h="40px" mb="80px">
              <MenuItem h="40px" bgColor="#0f0617" color="white">
                Home
              </MenuItem>

              <MenuItem bgColor="#0f0617 " h="40px">
                TV Shows
              </MenuItem>
              <MenuItem bgColor="#0f0617 " h="40px">
                Movies
              </MenuItem>
              <MenuItem bgColor="#0f0617 " h="40px">
                Web Series
              </MenuItem>
              <MenuItem bgColor="#0f0617 " h="40px">
                News
              </MenuItem>
              <MenuItem bgColor="#0f0617 " h="40px">
                Eduauraa
              </MenuItem>
              <MenuItem bgColor="#0f0617 " h="40px">
                Premium
              </MenuItem>
              <MenuItem bgColor="#0f0617 " h="40px">
                Live TV
              </MenuItem>
              <MenuItem bgColor="#0f0617 " h="40px">
                Music
              </MenuItem>
              <MenuItem bgColor="#0f0617 " h="40px">
                Rent
              </MenuItem>
              <MenuItem bgColor="#0f0617 " h="40px">
                Kids
              </MenuItem>
              <MenuItem bgColor="#0f0617 " h="40px">
                Videos
              </MenuItem>
            </MenuList>
          </Menu>
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
