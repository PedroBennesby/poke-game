export interface IPokemon {
  id: number;
  name: string;
  type: string;
  hp: number;
  image: string;
  moves: {
    move1: string;
    move2?: string;
    move3?: string;
    move4?: string;
  };
}
