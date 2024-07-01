export class Mv_Staff {
  /** 員工sn */
  Staff_sn: number = 0;
  /** 員工姓名 */
  Name: string = "";
  /** 員工編號 */
  StaffID : number = 0;
  /** 員工職稱_code_sn */
  JobTitle_code_sn : number = 0;
  /** 員工職稱_中文,顯示用 */
  JobTitle_code_name : number = 0;
  /** 員工身分證字號 */
  ID : string = "";
  /** 員工生日 */
  Birthday : Date = new Date();
  /** 員工到職日 */
  RegisterDay : Date = new Date();
  /** 有效值,可先忽略 */
  Valid: number = 0;
}
