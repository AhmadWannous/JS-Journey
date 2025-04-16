//Question 1
function generateReports(students) {
    //O(n * m)
    return students.map(student => {
        //O(n)
        const total = student.scores.reduce((num, score) => num + score, 0);
        //O(m)
        const avarage = Math.round(total / student.scores.length);
        //O(1)

        let grade;
        if (avarage >= 90) grade = 'A';
        else if (avarage >= 80) grade = 'B';
        else if (avarage >= 70) grade = 'C';
        else if (avarage >= 60) grade = 'D';
        else grade = 'F';
        //O(1)

        return {
            name: student.name,
            avarage: avarage,
            grade: grade,
        };
        //O(1)
    });
}

const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] },
]
console.log(generateReports(students));

//Question 2
class BankAccount {
    constructor(ownerName, initialBalance) {//O(1)
        this.name = ownerName;
        this.balance = initialBalance;
        this.history = [];
    }

    deposit(amount) {//O(1)
        this.balance += amount;
        this.history.push(`Deposited ${amount}$`);
    }

    whithdraw(amount) {//O(1)
        if (amount > this.balance) {
            this.history.push(`Failed to withdraw ${amount}$`);
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            this.history.push(`Withdraw ${amount}$`);
        }
    }

    transferTo(anotherAccount, amount) {//O(1)
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

    getSummary() {//O(1)
        return `${this.name}'s balance is ${this.balance}$`;
    }

    printHistory() {//O(n)
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

//Question 3
class TaskList {
    constructor(inputId, listId, buttonId) {
        this.input = document.getElementById(inputId);
        this.list = document.getElementById(listId);
        this.button = document.getElementById(buttonId);

        this.button.addEventListener("click", () => 
            this.addTask());
    }

    addTask() {
        const taskText = this.input.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.textContent = taskText;
            li.addEventListener("click", () => li.classList.toggle("Completed"));
            this.list.appendChild(li);
            this.input.value = "";
        }
    }
}

const taskList = new TaskList("task-input", "task-list", "add-btn");
