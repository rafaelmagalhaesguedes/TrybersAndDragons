import Energy from '../Energy';

export default interface Fighter {
  // Properties
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  
  // Methods
  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}