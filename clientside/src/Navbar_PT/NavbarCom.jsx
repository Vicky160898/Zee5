import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Flex,
  Spacer,
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
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import React from "react";
export default function DrawerE() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="#0f0617" onClick={onOpen}>
        <HamburgerIcon />
      </Button> */}
      <InputGroup w="200%" text="white">
          <InputLeftElement
            pointerEvents="none"
            color="white"
            fontSize="1.2em"
            children={<Search2Icon color="gray.300" />}
          />
          <Input focusBorderRadius="0.5px" placeholder="Enter amount" color="white" />
        </InputGroup >
      <Menu bgColor="#0f0617 " border="none" >
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
            <MenuList w="300px" bgColor="#0f0617" h="40px" mb="40px" color="white">
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
      {/* <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> */}
    </>
  );
}
