
export class Organization{
  orgId:number;
  orgName:string;
  orgIndustry: string;
  numIncidents:number;
  numRecordsLost:number;

  constructor(orgId:number, orgName:string, orgIndustry:string, numIncidents:number, numRecordsLost:number) {
    this.orgId = orgId;
    this.orgName = orgName;
    this.orgIndustry = orgIndustry;
    this.numIncidents = numIncidents;
    this.numRecordsLost = numRecordsLost;
  }

}
