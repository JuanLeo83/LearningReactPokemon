import { Box, Card, CardBody, CardFooter, Heading, HStack, Image, Stack, StackDivider, Tag, Text } from "@chakra-ui/react"

export function PokemonListItem({ item }) {
    return (
        <Box key={item.name}>
            <Card onClick={() => { }}
                direction={{ base: 'column', sm: 'row' }}
                width={500}
                backgroundColor="orange.50"
            >
                <Image
                    objectFit='contain'
                    maxW={{ base: '100%', sm: '200px' }}
                    marginStart={2}
                    marginEnd={2}
                    src={item.sprite} />

                <Stack>
                    <CardBody width={400}>
                        <Stack divider={<StackDivider />} spacing='2'>
                            <Heading size='md'>{item.name}</Heading>
                            <Text py='2'>Pokemon description coming soon</Text>
                        </Stack>
                    </CardBody>

                    <CardFooter>
                        <Stack>
                            <HStack spacing={10}>
                                <Text fontSize='xs' fontWeight='bold'>Weight: ---</Text>
                                <Text fontSize='xs' fontWeight='bold'>Height: ---</Text>
                            </HStack>
                            <HStack>
                                <Tag size='sm' variant='subtle' colorScheme='red'>Tag</Tag>
                                <Tag size='sm' variant='subtle' colorScheme='red'>Tag</Tag>
                            </HStack>
                        </Stack>
                    </CardFooter>
                </Stack>
            </Card>
        </Box>
    )
}