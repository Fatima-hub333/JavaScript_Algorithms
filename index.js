function factorialize(number1){
    let count = number1;
    if(count===0){
        return 1;
    }
    else{
        for(var i=1;i<count;i++){
            number1=number1*i;
        }
        return number1;
    }
}
factorialize(5);