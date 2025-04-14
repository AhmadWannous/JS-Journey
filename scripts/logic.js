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