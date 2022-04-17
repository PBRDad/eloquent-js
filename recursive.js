function isEven(N) {
    if (N == 0) {
        return true;
    }
    else if (N == 1) {
        return false;
    }
    else if (N < 0 || N % 1 != 0) {
        return "Not a positive whole number."
    }
    else {
        return isEven(N -2);
    }
}

console.log(isEven(75))