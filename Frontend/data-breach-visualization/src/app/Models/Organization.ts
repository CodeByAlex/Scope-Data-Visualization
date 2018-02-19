
export class Organization{
  private orgId:number;
  private orgName:string;
  private orgIndustry: string;

  constructor(orgId:number, orgName:string, orgIndustry:string) {
    this.orgId = orgId;
    this.orgName = orgName;
    this.orgIndustry = orgIndustry;
  }

}
