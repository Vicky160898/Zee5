import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
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
import { Nav } from "react-bootstrap";
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
    <Box p="0.2px" zIndex="3" position="fixed" w="100%" top="-1">
      <Flex
        // display={[ "none","flex"]}
        alignItems="center"
        gap="20px"
        bgColor="#0f0617"
      >
        <NavLink to="/">
          <Image
            ml="10px"
            h="70px"
            w="70px"
            mt="10px"
            mb="10px"
            borderRadius="20px"
            src={logo}
            alt=""
          />
        </NavLink>
        <Box
          color="white"
          gap="20px"
          display={{ base: "none", md: "none", lg: "flex" }}
        >
          <NavLink to="/" style={({ isActive }) => (isActive ? active : base)}>
            Home
          </NavLink>

          <NavLink
            to="/serial"
            style={({ isActive }) => (isActive ? active : base)}
          >
            TV Shows
          </NavLink>

          <NavLink
            to="/movies"
            style={({ isActive }) => (isActive ? active : base)}
          >
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
              // display={{ sm: "none" }}
              ml="-80px"
              mt="15px"
              boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            >
              <Box ml="25px" color="white" fontWeight={"bold"}>
                <NavLink to="/web-series">
                  {" "}
                  <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                    Web Series
                  </MenuItem>
                </NavLink>
                <NavLink to="/news">
                  <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                    News
                  </MenuItem>
                </NavLink>
                <NavLink to="/premium">
                  <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                    Premimum
                  </MenuItem>
                </NavLink>

                <NavLink to="/live">
                  <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                    Live TV
                  </MenuItem>
                </NavLink>
                <NavLink to="/song">
                  <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                    Music
                  </MenuItem>
                </NavLink>
                <NavLink to="/kids">
                  <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                    Kids
                  </MenuItem>
                </NavLink>
                <NavLink to="/popular">
                {" "}
                <MenuItem bgColor="#0f0617 " h="40px" fontWeight={"bold"}>
                  Popular
                </MenuItem>
              </NavLink>
                <NavLink to="/song">
                  <MenuItem bgColor="#0f0617" h="40px" fontWeight={"bold"}>
                    Videos
                  </MenuItem>
                </NavLink>
              </Box>
            </MenuList>
          </Menu>
        </Flex>

        <Spacer />
        <InputGroup
          w={["400px", "250px", "250px"]}
          color="white"
          display={["none", "block"]}
        >
          <InputLeftElement
            pointerEvents="none"
            color="white"
            fontSize="1.2em"
            children={<Search2Icon color="gray.300" />}
          />
          <Input focusBorderRadius="0.5px" placeholder="Search From here" />
        </InputGroup>

        <Box color="white" borderRadius="50%">
          <NavLink to="/login">
            <i class="fa-solid fa-user"></i>
          </NavLink>
        </Box>
        <Box
          color="white"
          display={{ base: "none", sm: "none", md: "none", lg: "block" }}
        >
          <ion-icon name="language-outline"></ion-icon>
        </Box>
        <Box
          color="white"
          w={{ sm: "none", md: "120px", lg: "130px" }}
          // display={["none","block"]}
          // display={{ base: "none", sm: "none", md: "none", lg: "block" }}
          h="30px"
          borderRadius="5px"
          backgroundColor="#8230c6"
          margin="20px"
          pt="2px"
          alignContent="center"
        >
          <NavLink to="/plan">PREMIMUM</NavLink>
        </Box>
        <Box
          color="white"
          bgColor="#0f0617"
          border="none"
          //  w="15%"
        >
          <Menu bgColor="#0f0617" border="none">
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
            <MenuList
              w="300px"
              bgColor="#0f0617 "
              h="40px"
              mb="60px"
              border="none"
            >
              <NavLink to="/">
                {" "}
                <MenuItem h="40px" bgColor="#0f0617" color="white">
                  Home
                </MenuItem>
              </NavLink>

              <NavLink to="/serial">
                <MenuItem bgColor="#0f0617 " h="40px">
                  TV Shows
                </MenuItem>
              </NavLink>
              <NavLink to="/movies">
                <MenuItem bgColor="#0f0617 " h="40px">
                  Movies
                </MenuItem>
              </NavLink>
              <NavLink to="/web-series">
                <MenuItem bgColor="#0f0617 " h="40px">
                  Web Series
                </MenuItem>
              </NavLink>
              <NavLink to="/news">
                {" "}
                <MenuItem bgColor="#0f0617 " h="40px">
                  News
                </MenuItem>
              </NavLink>
              <NavLink to="/popular">
                {" "}
                <MenuItem bgColor="#0f0617 " h="40px">
                  Popular
                </MenuItem>
              </NavLink>
              <NavLink to="/premium">
                {" "}
                <MenuItem bgColor="#0f0617 " h="40px">
                  Premium
                </MenuItem>
              </NavLink>
              <NavLink to="/live">
                <MenuItem bgColor="#0f0617 " h="40px">
                  Live TV
                </MenuItem>
              </NavLink>
              <NavLink to="/song">
                {" "}
                <MenuItem bgColor="#0f0617 " h="40px">
                  Music
                </MenuItem>
              </NavLink>

              <NavLink to="/kids">
                <MenuItem bgColor="#0f0617 " h="40px">
                  Kids
                </MenuItem>
              </NavLink>
              <NavLink to="/song">
                <MenuItem bgColor="#0f0617 " h="40px">
                  Videos
                </MenuItem>
              </NavLink>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};
