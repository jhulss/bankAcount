//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.money = 0;
    this.closed_account = false;
  }

  open() {
    //throw new Error("Error");
  }

  close() {
    this.money = 0;
    this.closed_account = true;
  }

  deposit() {
    if (this.closed_account)
    {
      throw new Error("Error");
    }else if (deposit < 0)
    {
      throw new Error("Error");
    }
    else {
      this.money += deposit;
    }
  }

  withdraw(withdraww) {
    if(this.closed_account){
      throw new Error("Error");
    }else if(withdraww < 0)
    {
      throw new Error("Error");
    }else if(withdraww > this.money)
    {
      throw new Error("Error");
    }
    else{
      this.money -= withdraww;
    }
    
    
  }

  get balance() {
    //throw new Error("Error");
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
    this.name = "Error";
  }
}
