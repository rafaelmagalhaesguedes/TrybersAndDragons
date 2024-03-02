import Race from './Race';

export default class Halfling extends Race {
  private static instancesCount = 0;
  private _life: number;

  constructor(name: string, destetiry: number) {
    super(name, destetiry);
    this._life = 60;
  }

  static createdRacesInstances(): number {
    Halfling.instancesCount += 1;
    return Halfling.instancesCount;
  }

  get maxLifePoints(): number {
    return this._life;
  }
}