let a = {
    '2': 0,
    '4': 1,
    '5': 2,
    '6': 3,
    '7': 4,
  };
  let arr1 = [7, 2, 5, 1, 8]
  let totala = 0;
  for(let i = 0; i < arr1.length ; i++){
    
    if(!(a[arr1[i].toString()] !== undefined)){
      totala += arr1[i]
    };
  }
  let b = {
    '7': 0,
    '2': 1,
    '5': 2,
    '1': 3,
    '8': 4,
  };
  let arr2 = [2, 4, 5, 6, 7]
  let totalb = 0;
  for(let i = 0; i < arr2.length ; i++){
    
    if(!(b[arr2[i].toString()] !== undefined)){
      totalb += arr2[i]
    };
  }
  const total = totala + totalb
  console.log(total)