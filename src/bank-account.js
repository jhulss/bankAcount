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
    //throw new Error("Remove this statement and implement this function");
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

  withdraw() {
    throw new Error("Remove this statement and implement this function");
  }

  get balance() {
    throw new Error("Remove this statement and implement this function");
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
