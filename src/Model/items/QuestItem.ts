import Item from './Item.ts';
import { TItem } from '../types/types.ts';

export default class QuestItem extends Item {
  isQuestItem: boolean;

  constructor(itemObject: TItem) {
    super(itemObject);
    this.isQuestItem = itemObject.isQuestItem;
  }
}