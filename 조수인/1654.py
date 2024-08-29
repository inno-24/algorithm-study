import sys


k, n = map(int, sys.stdin.readline().split())
lan = [int(sys.stdin.readline()) for _ in range(k)]

left, right = 1, max(lan)
answer = 0

while left <= right :
    mid = (left+right)//2
    count = 0
    
    for i in lan :
        count += i//mid

    if count >= n :
        answer = mid
        left = mid + 1
    else :
        right = mid - 1
        
print(answer)
        