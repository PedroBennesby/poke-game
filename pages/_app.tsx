import { ChakraProvider } from '@chakra-ui/react';
import { PokemonsProvider } from '../contexts/PokemonsProvider';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PokemonsProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </PokemonsProvider>
  );
}

export default MyApp;
