def solution(arr):
    answer = []
    for x in range(len(arr)):
        if x == 0 :
            temp_num = arr[x]
            answer.append(arr[x])
        else:
            if temp_num != arr[x]:
                answer.append(arr[x])
                temp_num = arr[x]
    
    
    return answer