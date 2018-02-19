
export class Actor{

  private actorId:number;
  private incidentId:number;
  private actorType:string;
  private actorPattern: string;

  constructor(actorId:number, incidentId:number, actorType:string, actorPattern: string) {
    this.actorId = actorId;
    this.incidentId = incidentId;
    this.actorType = actorType;
    this.actorPattern = actorPattern;
  }

}
