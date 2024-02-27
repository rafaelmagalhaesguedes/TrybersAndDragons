import Race from './Race';

export default class Elf extends Race {
  private static instancesCount = 0;
  private life = 99;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instancesCount += 1;
  }
    
  static createdRacesInstances(): number {
    return Elf.instancesCount;
  }
    
  get maxLifePoints(): number {
    return this.life;
  }
}