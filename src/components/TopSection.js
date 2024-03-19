import { Stack, VStack, Image, Center, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function TopSection({content, image}) {
    return (
        <Stack w="100%" spacing={10} mb={10} direction={['column', 'column', 'row']}>
            <Center w={["100%", "30%", "40%"]}>
                <Image w="200px" h="200px" src={image} alt='Pic' />
            </Center>
            <VStack px={8} w={["100%", "70%", "60%"]}>
                {content}
            </VStack>
        </Stack>
    )
}