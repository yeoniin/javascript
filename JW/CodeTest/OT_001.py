# board = [[0, 0, 0, 0, 0],
#          [0, 0, 1, 0, 3],
#          [0, 2, 5, 0, 1],
#          [4, 2, 4, 4, 2],
#          [3, 5, 1, 3, 1]]

# moves = [1, 5, 3, 5, 1, 2, 1, 4]


def solution(board, moves):
    answer = 0
    stack = []
    for i in range(len(moves)):

        grapCrane(board, moves[i] - 1, stack)
        if len(stack) > 1 and popingDoll(stack):
            answer += 2
    print(stack)
    return answer


def grapCrane(board, move, arr):

    for doll in board:
        if doll[move] > 0:
            arr.append(doll[move])
            doll[move] = 0
            break;


def popingDoll(stack):
    if stack[len(stack)-1] == stack[len(stack)-2]:
        stack.pop()
        stack.pop()
        return True
    else:
        return False
    


# solution(board, moves)