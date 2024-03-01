import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static instancesCount: number[] = [];
  private _energyType: EnergyType;

  constructor(name: string, energyType: EnergyType = 'mana') {
    super(name);
    Necromancer.instancesCount.push(Necromancer.instancesCount.length + 1);
    this._energyType = energyType;
  }

  static createdArchetypeInstances(): number {
    return this.instancesCount.length;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}