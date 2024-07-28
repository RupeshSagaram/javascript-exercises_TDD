const sumAll = function(int1, int2) {

    let allNum = [];

    
     

       if(int1<int2 && int1>0 && Number.isInteger(int2)===true){
        for(let i = int1; i<=int2; i++){
            allNum.push(i);
        }
    }
         else if(int1>int2){
            for(let i = int1; i>=int2; i--){
                allNum.push(i);
            }
        }
        
        else if(int1 <0 || int2<0){
          return "ERROR";
        }  

        else if(!Number.isInteger(int1) || !Number.isInteger(int2)){
            return 'ERROR';
        }

         if(Number.isInteger(int1) === false){
        
           return 'ERROR'
        }         
       

         
        let sum = 0;
        for(let i =0; i<allNum.length;i++){
            sum += allNum[i];
        } 
              
     return sum;
     


     };

   

// Do not edit below this line
module.exports = sumAll;
