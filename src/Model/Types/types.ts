import Position from "../character/Position"
import World from "../maps/World"
import Character from "../objects/Character"
import Trigger from "../objects/Trigger"

export type TItem = {
  type: string;
  id: string;
  name: string;
  icon: string;
  isEquippable?: boolean;
  isConsumable?: boolean;
  isClickable?: boolean;
  isTradable?: boolean;
  isQuestItem?: boolean;
  restoredHealth?: number;
  damage?: number;
  currentAmmo?: number;
  maxAmmo: number;
  range?: number;
  cost?: number;
  worldMap?: string;
}

export type TIcon = {
  toTop: string;
  toRight: string;
  toBottom: string;
  toLeft: string;
}

export type TGoal = {
  name: string;
  target: Trigger | Character;
}

export type TObject = {
  objectObject: TObject;
  type: string;
  position: Position;
  id: string;
  name: string;
  icon: TIcon;
  openedIcon?: TIcon;
  isKeyNeededToOpen?: boolean;
  isTriggerNeededToOpen?: boolean;
  returnedItem?: TItem;
  returnedItems1?: TItem[];
  returnedItems2?: TItem[];
  itemToActivate?: string;
  triggerToActivate?: string;
  triggered?: boolean;
  isFirstVisit?: boolean;
  isAccepted?: boolean;
  greetingDialog?: string;
  rejectDialog?: string;
  acceptDialog?: string;
  postDialog?: string;
  health?: number;
  damage?: number;
  range?: number;
  isMoving?: boolean;
}

export type TLocation = {
  name: string;
  entryDirections: string[];
  objects: TObject[];
}

export type TWorld = {
  id: string;
  name: string;
  goal: string;
  map: string;
  startItems: TItem[];
  heroIcon: string;
  startPosition: Position;
  locations: TLocation[];
}

export type TSavedGame = {
  name: string;
  world: TWorld;
}
