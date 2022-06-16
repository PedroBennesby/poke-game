import React from 'react';
import {
  Flex,
  Heading,
  useDisclosure,
  Button,
  Box,
  Image,
  Badge,
} from '@chakra-ui/react';
import { typeColors } from '../utils/TypeColors';
import { usePokemons } from '../contexts/PokemonsProvider';

const SelectedPokemon = () => {
  const { playerPokemon, opponentPokemon } = usePokemons();

  return (
    <Flex gap='12'>
      {Object.keys(playerPokemon).length > 0 && (
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Heading as='h2' size='sm' mt='4'>
            Selected Pokémon
          </Heading>
          <Box
            mt='4'
            maxW='lg'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            p='2'
          >
            <Image
              boxSize='300px'
              objectFit='cover'
              src={playerPokemon.image}
              alt={playerPokemon.name}
            ></Image>

            <Box p='4'>
              <Box display='flex' alignItems='baseline'>
                <Badge
                  borderRadius='full'
                  px='2'
                  colorScheme={typeColors[playerPokemon.type]}
                >
                  {playerPokemon.type}
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  {playerPokemon.moves.move1} - {playerPokemon.moves.move2}
                </Box>
              </Box>
              <Box
                mt='1'
                ml='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
                {playerPokemon.name}
              </Box>
            </Box>
          </Box>
        </Flex>
      )}
      {Object.keys(playerPokemon).length > 0 && (
        <Flex
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Heading as='h2' size='sm' mt='4'>
            Opponent Pokémon
          </Heading>
          <Box
            mt='4'
            maxW='lg'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            p='2'
          >
            <Image
              boxSize='300px'
              objectFit='cover'
              src={opponentPokemon.image}
              alt={opponentPokemon.name}
            ></Image>

            <Box p='4'>
              <Box display='flex' alignItems='baseline'>
                <Badge
                  borderRadius='full'
                  px='2'
                  colorScheme={typeColors[opponentPokemon.type]}
                >
                  {opponentPokemon.type}
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  {opponentPokemon.moves.move1} - {opponentPokemon.moves.move2}
                </Box>
              </Box>
              <Box
                mt='1'
                ml='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
                {opponentPokemon.name}
              </Box>
            </Box>
          </Box>
        </Flex>
      )}
    </Flex>
  );
};

export default SelectedPokemon;
