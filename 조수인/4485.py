import sys
import heapq

problem_num=1

while True:
    
    input = int(sys.stdin.readline().strip())
    
    if input == 0:
        break
    
    cave = []
    for i in range(input) :
        cave.append(list(map(int, sys.stdin.readline().split())))
        
    dir = [(-1,0), (1, 0), (0, 1), (0, -1)]
    dist = [[float('inf')] * input for _ in range(input)]
    dist[0][0] = cave[0][0]
    
    pq = []
    heapq.heappush(pq, (cave[0][0], 0, 0))
    
    while pq :
        cur_d, x, y = heapq.heappop(pq)
        
        if cur_d > dist[x][y] :
            continue
        
        for dx, dy in dir :
            nx, ny = x +dx, y + dy
            
            if 0 <= nx < input and 0<= ny < input :
                next_d = cur_d + cave[nx][ny]
                
                if next_d <dist[nx][ny] :
                    dist[nx][ny] = next_d
                    heapq.heappush(pq, (next_d, nx, ny))
                    
    answer = dist[input-1][input-1]
    print(f"Problem {problem_num}: {answer}")
    problem_num+=1