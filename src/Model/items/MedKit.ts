import Item from './Item';
import { TItem } from '../../Types/types';

export default class MedKit extends Item {
  isConsumable: boolean;
  restoredHealth: number;

  constructor(itemObject: TItem) {
    super(itemObject);
    this.isConsumable = itemObject.isConsumable;
    this.restoredHealth = itemObject.restoredHealth;
  }
}
