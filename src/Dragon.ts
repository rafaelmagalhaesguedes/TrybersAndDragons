import Monster from './Monster';

export default class Dragon extends Monster {
  private _dragonLife: number;

  constructor() {
    super();
    this._dragonLife = 999;
  }

  get lifePoints(): number {
    return this._dragonLife;
  }
}