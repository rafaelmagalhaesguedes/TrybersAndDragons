import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static instancesCount: number[] = [];
  private _energyType: EnergyType;

  constructor(name: string, energyType: EnergyType = 'stamina') {
    super(name);
    Warrior.instancesCount.push(Warrior.instancesCount.length + 1);
    this._energyType = energyType;
  }

  static createdArchetypeInstances(): number {
    return this.instancesCount.length;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}