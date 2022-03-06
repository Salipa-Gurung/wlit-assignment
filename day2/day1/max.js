function max(x,y,z) {
    if(x >= y && x >= z){
        return x;
    }
    if(y >= x && y >= z){
        return y;
    }

    return z;
}

console.log(max(2, 5, 4));