import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();
    const text = colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'

    return (
        <HStack>
            <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
            <Text whiteSpace="nowrap">{text}</Text>
        </HStack>
    )
}

export default ColorModeSwitch;