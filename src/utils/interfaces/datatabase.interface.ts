export interface Database {
  query(statement: string, values?: any): Promise<any>
}
