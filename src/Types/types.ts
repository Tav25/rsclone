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
