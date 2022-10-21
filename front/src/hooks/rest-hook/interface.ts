export interface IuseApi {
  route: string;
  customHeader: any | undefined;
}

export interface IusePostApi extends IuseApi {
  body: any;
}
