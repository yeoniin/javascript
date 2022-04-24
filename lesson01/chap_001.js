function solution(board, moves) {
    let answer = 0;
    let resultArray = [];
    
    for(var j = 0; j < moves.length; j++){  //크레인 인형 뽑는 횟수 
        
        for(var i = 0; i < board.length; i ++ ) { //보드 한 열의 모든 행 탐색
           
            if (board[i][moves[j] - 1] != 0 ) { // 인형 발견 시
              //  console.log(board[i][moves[j] - 1])
                if (resultArray.length != 0){  // 결과 바구니에 인형이 들어있을 때
                    if (resultArray[resultArray.length - 1] == board[i][moves[j] - 1]){ //결과 바구니의 맨  마지막 값과 현재 크레인이 든  인형 비교
                            resultArray.pop(); // 결과 바구니 맨  마지막 값 빼기
                            answer = answer + 2; //결과 값에 똑같은 인형 개수 증가 
                    }
                    else { //값이 같지 않을 때
                        resultArray.push(board[i][moves[j] - 1]); // 결과 바구니에 크레인 값  넣기
                    }
                }
                else { //결과 바니 값 없을 때
                    resultArray.push(board[i][moves[j] - 1]); //결과 바구니에 크레인값 넣기
                }
            
                board[i][moves[j] - 1] = 0; //뽑은 자리 빈값 처리
                break; // 뽑았으니까 현재 열  탐색 종료
            }   
       
        }
      //  console.log(resultArray)
        
    }

    return answer;
}


console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]),4)

