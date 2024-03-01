import { EnergyType } from '../Energy';

export default interface Fighter {
  // Properties
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: EnergyType;
  
  // Methods
  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}