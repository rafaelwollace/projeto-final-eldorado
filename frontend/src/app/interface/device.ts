import { Category } from './category';

export class Device {

  public id!: number;
  public Category_fk!: number;
  public Color!: string;
  public PartNumber!: string;
  Category: Category = new Category;

}
