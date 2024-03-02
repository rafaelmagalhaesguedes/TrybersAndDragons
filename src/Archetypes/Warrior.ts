import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static instancesCount: number[] = [];
  private _energyType: EnergyType;

  constructor(name: string, energyType: EnergyType = 'stamina') {
    super(name);
    this._energyType = energyType;
  }

  static createdArchetypeInstances(): number {
    Warrior.instancesCount.push(Warrior.instancesCount.length + 1);
    return Warrior.instancesCount.length;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}