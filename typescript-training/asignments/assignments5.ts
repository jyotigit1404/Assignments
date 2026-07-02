let empName: string[] = [
    "Alice Johnson",
    "Bob Smith",
    "Carol Davis",
    "David Brown",
    "Eva Green"
];

let baseSalary: number[] = [75000, 68000, 82000, 90000, 60000];
let experience: number[] = [5.1, 3.2, 7.1, 10.2, 2.4];
let rating: number[] = [4.2, 3.8, 4.5, 2.5, 3.5];

// Create an empty Map
let hikeMap = new Map<string, number>();

for (let i = 0; i < empName.length; i++) {

    let variablePay = 0;
    let bonus = 0;
    let reward = 0;

    // Check rating and assign variable pay & bonus
    if (rating[i]! >= 4) {
        variablePay = 15;
        bonus = 1500;
    } else if (rating[i]! >= 3) {
        variablePay = 10;
        bonus = 1200;
    } else {
        variablePay = 3;
        bonus = 300;
    }

    // Check experience and assign reward
    if (experience[i]! >= 5) {
        reward = 5000;
    }

    // Calculate total hike amount
    let hike = (baseSalary[i]! * variablePay / 100) + bonus + reward;

    // Calculate hike percentage
    let hikePercentage = (hike / baseSalary[i]!) * 100;

    // Store employee name and hike percentage in Map
    hikeMap.set(empName[i]!, hikePercentage);

    // Print employee details
    console.log("Employee Name: " + empName[i]);
    console.log("Hike: " + hike.toFixed(2));
    console.log("Hike Percentage: " + hikePercentage.toFixed(2) + "%");
    
}

// Print Map
console.log("Employee Name and Hike Percentage");

for (let [name, percentage] of hikeMap) {
    console.log(name + " : " + percentage.toFixed(2) + "%");
}