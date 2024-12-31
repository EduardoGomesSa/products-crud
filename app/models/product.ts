class Product {
    name: string;
    price: number;
    amount: number;
  
    constructor(name: string, price: number, amount: number) {
      this.name = name;
      this.price = price;
      this.amount = amount;
    }
  
    // Método para calcular o valor total com base na quantidade
    getTotalValue(): number {
      return this.price * this.amount;
    }
  }
  