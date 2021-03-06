import MainCharacter from '../character/MainCharacter';
import Position from '../character/Position';
import Junk from '../items/Junk';
import Locator from '../items/Locator';
import MedKit from '../items/MedKit';
import QuestItem from '../items/QuestItem';
import Weapon from '../items/Weapon';
import Character from '../objects/Character';
import CommonObject from '../objects/CommonObject';
import Crate from '../objects/Crate';
import Door from '../objects/Door';
import Enemy from '../objects/Enemy';
import TradingPlace from '../objects/TradingPlace';
import Trigger from '../objects/Trigger';
import { TGoal, TItem, TLocation, TObject, TWorld } from '../types/types';
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
  isChanged: boolean;

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
    this.isChanged = false;
  }

  init() {
    this.locationList.forEach((location: TLocation) => {
      const initLocation = new Location(location);
      initLocation.init();
      this.locations.push(initLocation);
    });
    this.locations.forEach((location) => {
      const mainTarget = location.objects.find((object) => object.name === this.goal.name);
      if (mainTarget) {
        this.goal.target = mainTarget;
      };

      const objectToActivate = location.objects.find((object) => object.triggerToActivate.name);
      if (objectToActivate) {
        objectToActivate.triggerToActivate.target = location.objects.find((object) => objectToActivate.triggerToActivate.name === object.name);
      }
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
    const weapon: any = this.mainCharacter.inventory.getItem('Lightsaber');
    this.mainCharacter.equipment.equipWeapon(weapon);
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

  convertToTWorld() {
    const convertedWorld: TWorld = this.worldObject;

    convertedWorld.startItems = [];
    this.mainCharacter.inventory.itemList.forEach((item) => {
      convertedWorld.startItems.push(item.itemObject);
    });

    this.locations.forEach((location: Location, locIndex: number) => {
      location.objects.forEach((object: CommonObject | Character | Crate | Door | Enemy | TradingPlace | Trigger, objIndex: number) => {
        const objRecord = convertedWorld.locations[locIndex].objects[objIndex];
        objRecord.icon = object.icon;
        objRecord.triggered = object.triggered;
        objRecord.isFirstVisit = object.isFirstVisit;
        objRecord.isAccepted = object.isAccepted;
      })
    });
    return convertedWorld;
  }

  toRender() {
    this.isChanged = true;
  }

  isRendered() {
    this.isChanged = false;
  }
}