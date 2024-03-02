import Monster from './Monster';

export default class Dragon extends Monster {
  private _dragonLife = 0;

  constructor() {
    super();
    this._dragonLife = 999;
  }

  get lifePoints(): number {
    return this._dragonLife;
  }
}