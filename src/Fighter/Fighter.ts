import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  // Properties
  defense: number;
  energy?: Energy;
  
  // Methods
  special?(enemy: Fighter): void;
  levelUp(): void;
}