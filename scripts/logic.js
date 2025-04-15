function generateReports(students) {
    return students.map(student => {
        const total = student.scores.reduce((num, score)=> num + score, 0);
        const avarage = Math.round(total / student.scores.length);

        let grade;
        if (avarage >= 90) grade = 'A';
        else if (avarage >= 80) grade = 'B';
        else if (avarage >= 70) grade = 'C';
        else if (avarage >= 60) grade = 'D';
        else grade = 'F';

        return {
            name: student.name,
            avarage: avarage,
            grade: grade,
        };
    });
}

const students = [
    {name: "Alice", scores: [90, 85, 92]},
    {name: "Bob", scores: [70, 68, 72]},
    {name: "Charlie", scores: [100, 100, 100]},
]
console.log(generateReports(students));

class BankAccount{
    constructor(ownerName, initialBalance){
        this.name = ownerName;
        this.balance = initialBalance;
        this.history = [];
    }

    deposite(amount){
        this.balance += amount;
        this.history.push(`Deposited ${amount}$`);
    }

    whithDraw(amount) {
        if (amount > this.balance) {
            this.history.push(`Failed to withdraw ${amount}$`);
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            this.history.push(`Withdraw ${amount$}`);
        }
    }

    transferTo (anotherAccount, amount) {
        if (amount > this.balance) {
            this.history.push(`Failed to transfer ${amount}$`);
            console.log("Insufficient funds to transfer");
        } else {
            this.balance -= amount;
            anotherAccount.balance += amount;
            this.history.push(`Transferred ${amount}$ to ${anotherAccount.name}`);
            anotherAccount.history.push(`Received ${amount}$ from ${this.name}`);
        }
    }

    getSummary() {
        return `${this.name}'s balance is ${this.balance}$`;
    }

    printHistory() {
        console.log(`Transaction history for ${this.name}: `);
        this.history.forEach(entry => 
            console.log(" - " + entry));
    }
}

const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300);

acc1.transferTo(acc2, 200);

console.log(acc1.getSummary()); 
console.log(acc2.getSummary()); 

acc1.printHistory();
acc2.printHistory();