export interface Menu {
  name: string;
  url: string;
  id: number;
}
export interface MenusData extends Menu {
  children?: Menu[];
}
