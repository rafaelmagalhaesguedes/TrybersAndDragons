import Race from './Race';

export default class Halfling extends Race {
  private static instancesCount = 0;
  private life = 60;

  constructor(name: string, destetiry: number) {
    super(name, destetiry);
    Halfling.instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instancesCount;
  }

  get maxLifePoints(): number {
    return this.life;
  }
}