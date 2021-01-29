import Item from './Item';
import { TItem } from '../types/types';

export default class QuestItem extends Item {
  isQuestItem: boolean;

  constructor(itemObject: TItem) {
    super(itemObject);
    this.isQuestItem = itemObject.isQuestItem;
  }
}