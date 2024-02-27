import Race from './Race';

export default class Dwarf extends Race {
  private static instancesCount = 0;
  private life = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instancesCount;
  }

  get maxLifePoints(): number {
    return this.life;
  }
}