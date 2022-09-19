import { ChakraProvider } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Button,
  } from '@chakra-ui/react'

    export function Menue() {
        return (
            <ChakraProvider>
<Menu>
  <MenuButton as={Button} colorScheme='pink'>
    Perfil
  </MenuButton>
  <MenuList>
    <MenuGroup title='Contacto'>
      <MenuItem> bedr10_capacitacion@hotmail.com</MenuItem>
      <MenuItem> +52 2281 08 89 83 </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Datos'>
      <MenuItem> Alejandro Mitre</MenuItem>
      <MenuItem>  Software Developer</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
</ChakraProvider>
        )
    } ;
