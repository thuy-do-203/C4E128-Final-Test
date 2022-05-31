let getPrimes = document.getElementById("getPrimes");
let a = parseInt(prompt("Please enter the first number", 50));
let b = parseInt(prompt("Please enter the second number", 100));

if (a < b) {
    getPrimes.innerText = "Primes are: "
    //j chạy từ a đến b
    for (j = a; j <= b; j++) {
        // đếm từ 2 đến căn bậc 2 của j, nếu j không chia hết cho số nào, thì j là số nguyên tố
        for (i = 2; i <= Math.sqrt(j); i++) {
            if (j % i !== 0) {
                getPrimes.innerText += " " + j;
            }
        }
    }
} else if (a > b) {
    getPrimes.innerText = "Primes are: "
    for (j = b; j <= a; j++) {
        for (i = 2; i <= Math.sqrt(j); i++) {
            if (j % i !== 0) {
                getPrimes.innerText += " " + j;
            }
        }
    }
} else {
    getPrimes.innerText = "Primes are: "
        for (i = 1; i <= Math.sqrt(a); i++) {
            if (a % i !== 0) {
                getPrimes.innerText += " " + a;
            }
        }
}
