import { Button, useToast, Wrap, WrapItem } from '@chakra-ui/react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const toast = useToast()
  return (
    <Wrap>
        <WrapItem>
          <Button
            pos={'fixed'}
            top={'4'}
            left={'4'}
            color={'white'}
            colorScheme="purple"
            onClick={() =>
              toast({
                title: `Hello World from Sameer Ahmed`,
                position: 'top-left',
                isClosable: true,
              })
            }
          >
            Click Me
          </Button>
        </WrapItem>
    </Wrap>
  )
}
