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
  questTargetID?: string;
  restoredHealth?: number;
  damage?: number;
  currentAmmo?: number;
  maxAmmo: number;
  range?: number;
  cost?: number;
}

export type TObject = {
  type: string;
  position: Position;
  id: string;
  name: string;
  icon: string;
  openedIcon?: string;
  isKeyNeededToOpen?: boolean;
  isTriggerNeededToOpen?: boolean;
  returnedItem?: TItem;
  returnedItems1?: TItem[];
  returnedItems2?: TItem[];
  itemToActivate?: TItem;
  triggerToActivate?: TObject;
  triggered?: boolean;
  isFirstVisit?: boolean;
  greetingDialog?: string;
  rejectDialog?: string;
  acceptDialog?: string;
  postDialog?: string;
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
  startLocation: Position;
  locations: TLocation[];
}

export type TSavedGame = {
  name: string;
  world: World;
}
