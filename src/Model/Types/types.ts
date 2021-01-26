import Position from "../character/Position"
import World from "../maps/World"

export type TItem = {
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
}

export type TIcon = {
  toTop: string;
  toRight: string;
  toBottom: string;
  toLeft: string;
}

export type TGoal = {
  location: string;
  target: string;
  triggered: boolean;
}

export type TObject = {
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
  triggerToActivate?: TGoal;
  triggered?: boolean;
  isFirstVisit?: boolean;
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
  goal: TGoal;
  map: string;
  startLocation: Position;
  locations: TLocation[];
}

export type TSavedGame = {
  name: string;
  world: World;
}
