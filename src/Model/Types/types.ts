import Position from "../Model/character/Position"
import World from "../Model/maps/World"

export type TItem = {
  id: number;
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
  position: Position;
  id: number;
  name: string;
  icon: string;
  openedIcon?: string;
  isKeyNeededToOpen?: boolean;
  isTriggerNeededToOpen?: boolean;
  returnedItem?: TItem;
  itemToActivate?: TItem;
  triggerToActivate?: TObject;
  triggered?: boolean;
  isFirstVisit?: boolean;
  greetingDialog?: string;
  rejectDialog?: string;
  acceptDialog?: string;
  postDialog?: string;
}

export type TSavedGame = {
  name: string;
  world: World;
}
