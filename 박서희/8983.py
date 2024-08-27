from bisect import bisect_left
import sys

input = sys.stdin.readline

M, N, L = map(int, input().split())
mList = list(map(int, input().split()))
mList.sort()


def closeNum(index, x):
    if index == M:
        return mList[index - 1]
    elif index == 0:
        return mList[0]
    else:
        left = mList[index - 1]
        right = mList[index]
        return left if x - left < right - x else right


answer = 0

for _ in range(N):
    x, y = map(int, input().split())
    close = bisect_left(mList, x)
    if abs(closeNum(close, x) - x) + y <= L:
        answer += 1

print(answer)