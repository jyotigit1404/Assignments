let customerName: string = "John Doe";
let creditScore: number = 720;
let income: number = 55000.0;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35.0

if(creditScore > 750){
    console.log("The loan is automatically approved");
}else if(creditScore >= 650 && creditScore <= 750){
    if(income >= 50000){
        if (isEmployed == true){
            if(debtToIncomeRatio > 40){
                console.log("Loan approved");
            }else{
                console.log("loan is denied");
            }
           
        }else{
            console.log("loan is denied");
        }
    }else{
        console.log("loan is denied");

    }
}else{
        console.log("loan is denied");

}