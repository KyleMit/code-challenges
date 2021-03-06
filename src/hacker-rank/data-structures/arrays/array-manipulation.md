# Discussion

## [Matt Whitehead](https://www.hackerrank.com/mwwhite)

> The idea here is to not actually access every element the query would modify as it takes up too much time. First we build an array of n+1 0's. For each query, we will add k to the value at index a - 1 (to convert to 0 indexed array), and subtract the value of k from the value at index b (this is the same as b + 1 if the array were 0 indexed which is what we want). Thus the non-zero values of the array represent how the 0s between them differ from what comes before and after.
>
> For example if we start with this array: [0, 0, 0, 0, 0]
>
> And our query is: (a=1, b=3, k=100)
>
> We would modify the array to the following: [100, 0, 0, -100, 0].
>
> The 100 tells us that its value and every value that comes after it is 100 greater than what comes before (in this case nothing, so all these values are 100). The -100, tells us that it and every value that comes after it are 100 LESS than what came before. This way we only have to perform 2 operations in O(1) time for each query, regardless of how many values it modifies.
>
> Then to find the max value, we can simply initialize two counter variables to 0 and run through the entire array, adding each element to one of the counters and then checking to see if the number is the largest number we've seen. Then we simply return the counter with the max value we've seen. Voila!
>
> Thanks to other commenters from whom I stole the idea. I just wanted to provide a really well explaned, high-level solution for those that are beginner programmers.
\- [https://www.hackerrank.com/challenges/crush/forum/comments/505698]

