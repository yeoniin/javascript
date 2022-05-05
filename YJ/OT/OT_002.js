function solution(arr)
{
    let answer = [];
    let value = arr[0];
    
    answer.push(value);
    
    for (let i = 1; arr.length > i; i++) {
        if(value != arr[i]){
            answer.push(arr[i]);
            value = arr[i];
        }   
    }
    
    return answer;
}