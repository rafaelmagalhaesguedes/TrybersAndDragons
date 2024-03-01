import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static instancesCount: number[] = [];
  private _energyType: EnergyType;

  constructor(name: string, energyType: EnergyType = 'stamina') {
    super(name);
    Ranger.instancesCount.push(Ranger.instancesCount.length + 1);
    this._energyType = energyType;
  }

  static createdArchetypeInstances(): number {
    return this.instancesCount.length;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}