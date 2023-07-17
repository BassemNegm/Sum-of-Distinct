function sumOfDistinct(set1, set2) {
    let distinct = [];
    
    for (let i = 0; i < set1.length; i++) {
        if(!set2.includes(set1[i]) && !distinct.includes(set1[i])) {
            distinct.push(set1[i]);
        }
    }
    for (let i=0; i < set2.length; i++) {
        if(!set1.includes(set2[i]) && !distinct.includes(set2[i])) {
            distinct.push(set2[i]);
        }
    }
    let sum = 0;
    for (let i= 0; i < distinct.length; i++){
        sum +=distinct[i];
    }
    return sum;
    }
    let set1 = [3, 1, 7, 9];
    let set2 = [2, 4, 1, 9, 3];
    let result = sumOfDistinct(set1, set2);
    console.log(result);