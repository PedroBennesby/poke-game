import React, { ReactPropTypes } from 'react';
import {
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Image,
  Badge,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { typeColors } from '../utils/TypeColors';
import { IPokemon } from '../interfaces/Pokemon';
import { usePokemons } from '../contexts/PokemonsProvider';

const PokemonSelector = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const { setPlayerPokemon, pokemons } = usePokemons();

  const handlePokemonSelection = (pokemon: IPokemon) => {
    setPlayerPokemon(pokemon);
    onClose();
  };

  return (
    <Flex justifyContent='center'>
      <Button mt={4} onClick={onOpen}>
        Choose your Pokémon
      </Button>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pokémon selection</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap='4'>
              {pokemons.map((pokemon: IPokemon) => (
                <Box
                  key={pokemon.id}
                  maxW='sm'
                  borderWidth='1px'
                  borderRadius='lg'
                  overflow='hidden'
                  p='2'
                >
                  <Image src={pokemon.image} alt='Cyndaquil'></Image>

                  <Box p='4'>
                    <Box display='flex' alignItems='baseline'>
                      <Badge
                        borderRadius='full'
                        px='2'
                        colorScheme={typeColors[pokemon.type]}
                      >
                        {pokemon.type}
                      </Badge>
                      <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                      >
                        {pokemon.moves.move1} - {pokemon.moves.move2}
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
                      {pokemon.name}
                    </Box>
                  </Box>
                  <Button
                    colorScheme='green'
                    ml={3}
                    onClick={() => handlePokemonSelection(pokemon)}
                  >
                    Choose
                  </Button>
                </Box>
              ))}
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' ml={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default PokemonSelector;
