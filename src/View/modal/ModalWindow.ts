import './modal.scss';
import Model from '../../Model/Model';
import NewUser from './newUser/NewUser';
import SaveGame from './saveGame/SaveGame';
import LoadGame from './loadGame/LoadGame';
import About from './about/About';
import Statistics from './statistics/Statistics';

export default class ModalWindow {
  model: Model;
  newUser: NewUser;
  saveGame: SaveGame;
  loadGame: LoadGame;
  statistics: Statistics;
  about: About;

  constructor(model: Model) {
    this.model = model;
    this.newUser = new NewUser(model);
    this.saveGame = new SaveGame(model);
    this.loadGame = new LoadGame(model);
    this.statistics = new Statistics(model);
    this.about = new About();
  }

  init() {
  }
}