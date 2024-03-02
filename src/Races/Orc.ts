import Race from './Race';

export default class Orc extends Race {
  private static instancesCount = 0;
  private _life: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._life = 74;
  }

  static createdRacesInstances(): number {
    Orc.instancesCount += 1;
    return Orc.instancesCount;
  }

  get maxLifePoints(): number {
    return this._life;
  }
}