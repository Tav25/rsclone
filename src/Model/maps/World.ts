import MainCharacter from '../character/MainCharacter';
import Position from '../character/Position';
import Junk from '../items/Junk';
import Locator from '../items/Locator';
import MedKit from '../items/MedKit';
import QuestItem from '../items/QuestItem';
import Weapon from '../items/Weapon';
import { TGoal, TItem, TLocation, TWorld } from '../types/types';
import Location from './Location';

export default class World {
  worldObject: TWorld;
  id: string;
  name: string;
  goal: TGoal;
  map: string;
  startItems: TItem[];
  heroIcon: string;
  startPosition: Position;
  locationList: TLocation[];
  locations: Location[];
  mainCharacter: MainCharacter;
  worldSize: number;
  startTime: number;
  elapsedTime: number;

  constructor(worldObject: TWorld) {
    this.worldObject = worldObject;
    this.id = worldObject.id;
    this.name = worldObject.name;
    this.goal = {
      name: worldObject.goal,
      target: undefined,
    }
    this.map = worldObject.map;
    this.startItems = worldObject.startItems;
    this.heroIcon = worldObject.heroIcon;
    this.startPosition = worldObject.startPosition;
    this.locationList = worldObject.locations;
    this.worldSize = this.locationList.length;
    this.locations = [];
  }

  init() {
    this.locationList.forEach((location: TLocation) => {
      const initLocation = new Location(location);
      initLocation.init();
      this.locations.push(initLocation);
    });
    this.locations.forEach((location) => {
      const target = location.objects.find((object) => object.name === this.goal.name);
      if (target) {
        this.goal.target = target;
      };
    });
    this.mainCharacter = new MainCharacter(this.startPosition, this.heroIcon);
    this.startItems.forEach((item) => {
      switch (item.type) {
        case 'junk':
          this.mainCharacter.pickItem(new Junk(item));
          break;
        case 'locator':
          this.mainCharacter.pickItem(new Locator(item));
          break;
        case 'medkit':
          this.mainCharacter.pickItem(new MedKit(item));
          break;
        case 'questItem':
          this.mainCharacter.pickItem(new QuestItem(item));
          break;
        case 'weapon':
        this.mainCharacter.pickItem(new Weapon(item));
        break;
      }
    });
    this.startTime = Date.now();
    this.elapsedTime = 0;
  }

  setCurrentTime(): void {
    this.startTime = Date.now();
  }

  setFinishTime(): void {
    const finishTime: number = Date.now();
    this.elapsedTime += finishTime - this.startTime;
  }

  isWin(): boolean {
    return this.goal.target.triggered;
  }

  isLose(): boolean {
    return this.mainCharacter.isDead();
  }

  // convertToTWorld(): TWorld {
  //   const convertedWorld: TWorld = {};

  //   return convertedWorld;
  // }
}