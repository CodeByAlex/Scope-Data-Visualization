
export class Organization{
  private orgId:number;
  private orgName:string;
  private orgIndustry: string;
  private numIncidents:number;
  private numRecordsLost:number;

  constructor(orgId:number, orgName:string, orgIndustry:string, numIncidents:number, numRecordsLost:number) {
    this.orgId = orgId;
    this.orgName = orgName;
    this.orgIndustry = orgIndustry;
    this.numIncidents = numIncidents;
    this.numRecordsLost = numRecordsLost;
  }

}
