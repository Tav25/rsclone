import Item from './Item';
import { TItem } from '../../Types/types';

export default class QuestItem extends Item {
  isQuestItem: boolean;
  questTargetID: string;

  constructor(itemObject: TItem) {
    super(itemObject);
    this.isQuestItem = itemObject.isQuestItem;
    this.questTargetID = itemObject.questTargetID;
  }

  isQuestTarget(targetID: string) {
    return this.questTargetID === targetID;
  }
}