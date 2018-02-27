
export class Actor {

  actorId: number;
  actorType: string;
  actorPattern: string;

  constructor(actorId?: number, actorType?: string, actorPattern?: string) {
    this.actorId = actorId;
    this.actorType = actorType;
    this.actorPattern = actorPattern;
  }

}
