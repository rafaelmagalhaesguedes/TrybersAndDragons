import Race from './Race';

export default class Elf extends Race {
  private static instancesCount = 0;
  private _life: number;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._life = 99;
  }
    
  static createdRacesInstances(): number {
    Elf.instancesCount += 1;
    return Elf.instancesCount;
  }
    
  get maxLifePoints(): number {
    return this._life;
  }
}