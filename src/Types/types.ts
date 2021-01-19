export type TItem = {
  id: number;
  name: string;
  icon: string;
  isEquippable: boolean;
  isConsumable: boolean;
  isUsable: boolean;
  isQuestItem: boolean;
  restoredHealth?: number;
  damage?: number;
  currentAmmo?: number;
  maxAmmo: number;
  range?: number;
  cost?: number;
}
