import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this.maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get dexterity() {
    return this._dexterity;
  }

  get energy() {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = Math.max(0, attackPoints - this._defense);
    this._lifePoints = Math.max(0, this._lifePoints - damage);
    
    return this._lifePoints <= 0 ? -1 : this._lifePoints;
  }

  attack(enemy: Fighter): void {
    const attackPoints = this._strength;
    enemy.receiveDamage(attackPoints);
  }

  levelUp(): void {
    const increment = getRandomInt(1, 10);

    this._strength += increment;
    this._dexterity += increment;
    this._defense += increment;
    this._energy.amount = 10;

    const newMaxLifePoints = this.maxLifePoints + increment;

    if (newMaxLifePoints < this._race.maxLifePoints) {
      this.maxLifePoints = newMaxLifePoints;
    } else {
      this.maxLifePoints = this._race.maxLifePoints;
    }
  }
}