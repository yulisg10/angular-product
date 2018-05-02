export class Product {
  public id: number;
	public code: string;
	public name: string;
	public amount: number;
	public price: number;
	public category: number;
  public description: string;
  public imagePath: string;

  constructor(code: string,
              name: string,
              amount: number,
              price: number,
              category: number,
              description: string,
              imagePath: string){
    this.code = code;
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.category = category;
    this.description = description;
    this.imagePath = imagePath;
  }
}
