function solution(arr) {
    var answer = [];
    var min = 0;
    
    if(arr.length==1){
        answer.push(-1);
        return answer;
    }
    else{
        for(var i=0; i<arr.length; i++){
            if ( i==0){
                min = arr[i];
            }
            else {
                if(min>arr[i]){
                    min = arr[i];
                }
            }
        
        }
        
        answer = arr.filter(number => number != min);
     
    }
    return answer;
    
}