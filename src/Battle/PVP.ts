import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _opponent: Fighter;
  
  constructor(player: Fighter, opponent: Fighter) {
    super(player);
    this._opponent = opponent;
  }

  private fightRound(): number | undefined {
    if (this._opponent.lifePoints > 0) {
      this.player.attack(this._opponent);
      if (this._opponent.lifePoints <= 0) return;

      this._opponent.attack(this.player);
      if (this.player.lifePoints <= 0) return -1;
    }
  }

  // Override the fight method
  fight(): number {
    while (this.player.lifePoints > 0 && this._opponent.lifePoints > 0) {
      this.fightRound();
    }

    return this.player.lifePoints <= 0 ? -1 : 1;
  }
}