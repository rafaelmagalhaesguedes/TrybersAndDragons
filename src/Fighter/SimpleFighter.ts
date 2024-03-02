export default interface SimpleFighter {
  // Properties
  lifePoints: number;
  strength: number;

  // Methods
  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): number;
}