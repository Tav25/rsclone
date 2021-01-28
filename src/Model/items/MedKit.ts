import Item from './Item.ts';
import { TItem } from '../types/types.ts';

export default class MedKit extends Item {
  isConsumable: boolean;
  restoredHealth: number;

  constructor(itemObject: TItem) {
    super(itemObject);
    this.isConsumable = itemObject.isConsumable;
    this.restoredHealth = itemObject.restoredHealth;
  }
}
