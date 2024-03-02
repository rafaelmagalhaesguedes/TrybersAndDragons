import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static instancesCount: number[] = [];
  private _energyType: EnergyType;

  constructor(name: string, energyType: EnergyType = 'mana') {
    super(name);
    this._energyType = energyType;
  }

  static createdArchetypeInstances(): number {
    Mage.instancesCount.push(Mage.instancesCount.length + 1);
    return Mage.instancesCount.length;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}