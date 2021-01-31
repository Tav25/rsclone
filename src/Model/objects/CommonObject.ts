import { TGoal, TIcon, TObject } from "../types/types";
import Position from "../character/Position";
import Trigger from "./Trigger";
import Character from "./Character";
import Junk from "../items/Junk";
import QuestItem from "../items/QuestItem";

export default class CommonObject {
  objectObject: TObject;
  type: string;
  position: Position;
  id: string;
  name: string;
  icon: TIcon;
  isKeyNeededToOpen: boolean;
  isTriggerNeededToOpen: boolean;
  itemToActivate: string;
  triggerToActivate: TGoal;
  triggered: boolean;
  isFirstVisit: boolean;
  isAccepted: boolean;
  greetingDialog: string;
  rejectDialog: string;
  acceptDialog: string;
  postDialog: string;

  constructor(objectObject: TObject) {
    this.objectObject = objectObject;
    this.type = objectObject.type;
    this.position = objectObject.position;
    this.id = objectObject.id;
    this.name = objectObject.name;
    this.icon = objectObject.icon;
    this.isKeyNeededToOpen = !!objectObject.isKeyNeededToOpen;
    this.isTriggerNeededToOpen = !!objectObject.isTriggerNeededToOpen;
    this.itemToActivate = objectObject.itemToActivate;
    this.triggerToActivate = {
      name: objectObject.triggerToActivate,
      target: undefined,
    };
    this.triggered = !!objectObject.triggered;
    this.isFirstVisit = !!objectObject.isFirstVisit;
    this.isAccepted = !!objectObject.isAccepted;
    this.greetingDialog = objectObject.greetingDialog;
    this.rejectDialog = objectObject.rejectDialog;
    this.acceptDialog = objectObject.acceptDialog;
    this.postDialog = objectObject.postDialog;
  }

  getTriggerToActivate(objectInstance?: Trigger | Character): void {
    this.triggerToActivate.target = objectInstance;
  }

  isValidKey(itemInstance: Junk | QuestItem): boolean {
    if (itemInstance) return itemInstance.name === this.itemToActivate;
    else return false;
  }

  isTriggered(): boolean {
    return !!this.triggerToActivate.target.triggered || false;
  }

  getDialog(): string {
    if (this.greetingDialog || this.acceptDialog || this.rejectDialog || this.postDialog) {
      if (this.isFirstVisit) {
        this.isFirstVisit = false;
        if (!this.isKeyNeededToOpen) {
          return this.acceptDialog;
        }
        return this.greetingDialog;
      } else if (this.triggered && !this.isAccepted) {
        this.isAccepted = true;
        console.log('accepted');
        return this.acceptDialog;
      } else if (!this.triggered) {
        return this.rejectDialog;
      } else return this.postDialog;
    }
  }
}