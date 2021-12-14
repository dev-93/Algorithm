# 문제
> (English)
You are hosting a tennis tournament. P players, who will take part in the first round of this tournament, are already registered and you have reserved C tennis courts for the matches. Exactly two players play in each game and only one game can be played on each court at any given time. You want to host the maximum possible number of games starting at the same time (in order to finish the first round quickly).

How many games can be hosted in parallel simultaneously?

Write a function:

function solution(P, C);

that, given the number of players P and the number of reserved courts C, returns the maximum number of games that can be played in parallel.

Examples:

1. Given P = 5 players and C = 3 available courts, the function should return 2. Two games can be played simultaneously (for instance, the first and second players can play on the first court, and the third and fourth players on the second court, and the third court will be empty because the fifth player does not have a partner to play with).

2. Given P = 10 players and C = 3 courts, the function should return 3. At most three games can be hosted in parallel.

Assume that:

P and C are integers within the range [1..30,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

- (한글)
테니스 대회를 주최하고 있습니다. 이 토너먼트의 첫 번째 라운드에 참가할 P 플레이어는 이미 등록되어 있으며 경기를 위해 C 테니스 코트를 예약했습니다. 각 게임에 정확히 두 명의 플레이어가 플레이하며 주어진 시간에 각 코트에서 한 게임만 플레이할 수 있습니다. (첫 번째 라운드를 빨리 끝내기 위해) 동시에 시작하는 가능한 최대 게임 수를 호스팅하려고 합니다.

동시에 얼마나 많은 게임을 병렬로 호스팅할 수 있습니까?

Write a function:

function solution(P, C);

플레이어 P의 수와 예약된 코트 C의 수가 주어지면 병렬로 플레이할 수 있는 최대 게임 수를 반환합니다.

예:

1. P = 5명의 플레이어 및 C = 3개의 사용 가능한 코트에서 함수는 2를 반환해야 합니다. 2개의 게임을 동시에 재생할 수 있습니다(예: 첫 번째 및 두 번째 플레이어는 첫 번째 코트에서 플레이할 수 있고 세 번째 및 네 번째 플레이어는 두 번째 코트, 세 번째 코트는 다섯 번째 플레이어와 함께 플레이할 파트너가 없기 때문에 비어 있습니다.

2. P = 10명의 플레이어와 C = 3개의 코트가 있는 경우 함수는 3을 반환해야 합니다. 최대 3개의 게임을 동시에 호스팅할 수 있습니다.

다음과 같이 가정합니다.

P와 C는 [1..30,000] 범위의 정수입니다.
솔루션에서 정확성에 중점을 둡니다. 솔루션의 성능은 평가의 초점이 아닙니다.
