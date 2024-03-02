import Battle, { PVP, PVE } from './Battle';
import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';

// Create 3 Character objects
const player1 = new Character('player1');
player1.levelUp();
player1.levelUp();

const player2 = new Character('player2');
const player3 = new Character('player3');

// Monster object
const monster1 = new Monster();
const monster2 = new Dragon();

// Create a PVP object
const pvp = new PVP(player2, player3);

// Create a PVE object
const pve = new PVE(player1, [monster1, monster2]);

// Create the runBattles function
const runBattles = (battles: Battle[]) => {
  battles.forEach((battle: Battle) => battle.fight());
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };