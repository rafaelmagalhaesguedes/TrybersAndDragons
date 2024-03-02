import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: SimpleFighter[] = [];
  constructor(player: Fighter, opponent: SimpleFighter[]) {
    super(player);
    this._monsters = opponent;
  }
  
  private fightRound(enemy: SimpleFighter): number | undefined {
    if (enemy.lifePoints > 0) {
      this.player.attack(enemy);
      if (enemy.lifePoints <= 0) return;

      enemy.attack(this.player);
      if (this.player.lifePoints <= 0) return -1;
    }
  }

  // Override the fight method
  fight(): number {
    while (this.player.lifePoints > 0 && this._monsters[0].lifePoints > 0) {
      this._monsters.forEach((monster) => {
        this.fightRound(monster);
      });
    }

    return this.player.lifePoints <= 0 ? -1 : 1;
  }
}