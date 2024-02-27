import Race from './Race';

export default class Orc extends Race {
  private static instancesCount = 0;
  private life = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instancesCount;
  }

  get maxLifePoints(): number {
    return this.life;
  }
}