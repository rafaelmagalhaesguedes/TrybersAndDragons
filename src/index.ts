import Character from './Character';
import PVP from './Battle/PVP';
import Battle from './Battle/Battle';
import { PVE } from './Battle';
import Monster from './Monster';

// Create 3 Character objects
const player1 = new Character('player1');

// Level up player1
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const player2 = new Character('player2');
const player3 = new Character('player3');

// Monster object
const monster1 = new Monster();
const monster2 = new Monster();
const monster3 = new Monster();
const monster4 = new Monster();

// Create a PVP object
const pvp = new PVP(player2, player3);

// Create a PVE object
const pve = new PVE(player1, [monster1, monster2, monster3, monster4]);

// Create the runBattles function
const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => battle.fight());
};

// Export the created objects and function
export { player1, player2, player3, pvp, pve, runBattles };