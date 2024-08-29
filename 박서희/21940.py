# 가운데에서 만나기
def main():
    import sys
    input = sys.stdin.readline

    INF = int(1e9)
    N, M = map(int, input().split())

    graph = [[INF for _ in range(N)] for _ in range(N)]

    for i in range(N):
        for j in range(N):
            if i == j:
                graph[i][j] = 0

    for _ in range(M):
        a, b, t = map(int, input().split())
        graph[a-1][b-1] = t

    for k in range(N):
        for a in range(N):
            for b in range(N):
                graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

    K = int(input())
    city = list(map(int, input().split()))

    round = [[0 for _ in range(K)] for _ in range(N)]
    for i in range(N):
        for j in range(K):
            round[i][j] = graph[city[j]-1][i] + graph[i][city[j]-1]

    minValue = INF
    answer = []
    for i in range(N):
        if max(round[i]) < minValue:
            minValue = max(round[i])
            answer = [i+1]
        elif max(round[i]) == minValue:
            answer.append(i+1)

    print(*answer)

main()