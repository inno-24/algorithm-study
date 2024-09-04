# 순회강연
def main():
    import heapq
    import sys

    input = sys.stdin.readline

    n = int(input())
    lectures = []
    for _ in range(n):
        p, d = map(int, input().split())
        lectures.append((d, p))
    lectures.sort()

    heap = []
    for lecture in lectures:
        heapq.heappush(heap, lecture[1])
        while len(heap) > lecture[0]:
            heapq.heappop(heap)

    answer = 0
    while heap:
        answer += heapq.heappop(heap)
    print(answer)

main()