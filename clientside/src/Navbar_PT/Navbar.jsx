import React from "react";
import { NavLink } from "react-router-dom";
import {
  Flex,
  Spacer,
  Input,
  Image,
  Box,
  MenuItem,
  Button,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
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
    <Box p="0.2px" w="100%" zIndex="2" position="fixed" mb="80px" >
      <Flex alignItems="center" gap="20px" bgColor="#0f0617">
        <Image
          h="60px"
          w="60px"
          src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.65"
          alt=""
        />
        <Flex color="white" gap="20px" style={{ overflow: "hidden" }}>
          <Box>
            <NavLink
              to="#"
              style={({ isActive }) => (isActive ? active : base)}
            >
              Home
            </NavLink>
          </Box>
          <Box>
            <NavLink
              to="#"
              style={({ isActive }) => (isActive ? active : base)}
            >
              TV Shows
            </NavLink>
          </Box>
          <Box>
            <NavLink
              to="#"
              style={({ isActive }) => (isActive ? active : base)}
            >
              Movies
            </NavLink>
          </Box>
        </Flex>
        <Flex>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              color="white"
              bgColor="#0f0617 "
            >
              <ion-icon name="apps-outline"></ion-icon>
            </MenuButton>
            <MenuList bgColor="#0f0617" w="200px" color="white">
              <MenuItem bgColor="#0f0617" h="40px">
                Web Series
              </MenuItem>
              <MenuItem bgColor="#0f0617" h="40px">
                News
              </MenuItem>
              <MenuItem bgColor="#0f0617" h="40px">
                Eduauraa
              </MenuItem>
              <MenuItem bgColor="#0f0617" h="40px">
                Premimum
              </MenuItem>
              <MenuItem bgColor="#0f0617" h="40px">
                News
              </MenuItem>
              <MenuItem bgColor="#0f0617" h="40px">
                Live TV
              </MenuItem>
              <MenuItem bgColor="#0f0617" h="40px">
                Music
              </MenuItem>
              <MenuItem bgColor="#0f0617" h="40px">
                Rent
              </MenuItem>
              <MenuItem bgColor="#0f0617" h="40px">
                Kids
              </MenuItem>
              <MenuItem bgColor="#0f0617" h="40px">
                Videos
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Spacer />
        <Flex
          border="1px solid purple "
          w="25%"
          gap="10px"
          pl="10px"
          pt="10px"
          h="30px"
          color="white"
          alignItems="center"
        >
          <ion-icon name="search-outline"></ion-icon>
          <Input
            w="95%"
            bgColor="#0f0617"
            outlineColor="black"
            outline="none"
            h="23px"
            border="none"
            placeholder="Search for Movies, Shows, Channels etc."
          />
        </Flex>

        <Box color="white" borderRadius="50%">
          <i class="fa-solid fa-user"></i>
        </Box>
        <Box color="white">
          <ion-icon name="language-outline"></ion-icon>
        </Box>
        <Box
          color="white"
          w="18%"
          h="30px"
          borderRadius="5px"
          backgroundColor="#8230c6"
          margin="20px"
          pt="4px"
          alignContent="center"
        >
          PREMIMUM
        </Box>
        <Box color="white">
          <Menu bgColor="#0f0617 " border="none">
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              //   variant="outline"
              w="80px"
              h="40px"
              border="none"
              color="white"
              bgColor="#0f0617 "
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
    </Box>
  );
};
