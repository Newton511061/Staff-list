export class SearchData {
  /** 員工姓名 */
  Name: string = "";
  /** 員工編號 */
  StaffID : number = 0;
  /** 員工職稱 */
  JobTitle_code_sn : number = 0;
  /** 員工到職日_起始 */
  RegisterDay_startDate : Date = new Date();
  /** 員工到職日_結束 */
  RegisterDay_endDate : Date = new Date();
  /** 目前查詢頁數,先固定給0就好 */
  CurrentPage: number = 0;
  /** 單頁資料筆數,先固定給50就好 */
  Row: number = 50;
}
