export type TItem = {
  name: string;
  icon: string;
  isEquippable: boolean;
  isConsumable: boolean;
  isUsable: boolean;
  isQuestItem: boolean;
  restoredHealth?: number;
  damage?: number;
  ammo?: number;
  range?: number;
  cost?: number;
}