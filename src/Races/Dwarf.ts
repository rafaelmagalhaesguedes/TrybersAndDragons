import Race from './Race';

export default class Dwarf extends Race {
  private static instancesCount = 0;
  private _life: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._life = 80;
  }

  static createdRacesInstances(): number {
    Dwarf.instancesCount += 1;
    return Dwarf.instancesCount;
  }

  get maxLifePoints(): number {
    return this._life;
  }
}