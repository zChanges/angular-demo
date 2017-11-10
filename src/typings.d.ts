/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
  hot:any;
}
declare module "*.json" {
  const value: any;
  export default value;
}