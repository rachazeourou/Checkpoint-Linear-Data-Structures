let a = {
    '2': 0,
    '4': 1,
    '5': 2,
    '6': 3,
    '7': 4,
  };
  
  let arr = [7, 2, 5, 1, 8]
  
  let totala = 0;
  
  for(let i = 0; i < arr.length ; i++){
    
    if(a[arr[i].toString()] !== undefined){
      console.log(arr[i])
      totala += arr[i]
    };
    
  }
  totala = totala*2;
  
  console.log(totala)