# CDT_ZURI

### Practical explanation of the code with the given example

Example,

Point A = [53.5872,-2.4138]
Point B = [53.474,-2.2388]

TimeDuration Module determins that it will take 78mins from Point A to Point B.
YourModule determines expected time from Point A to Point B is 15.2mins. 

This means 2 things:
1. There is an obstruction
2. The obstruction is impenetrable. 

#### Explanation
Point A = [53.5872, -2.4138]
Point B = [53.474, -2.2388]

As mentioned that the Time Duration Module determines it will take 78 minutes to travel from Point A to Point B.

From these points, I need to calculate the distance between Point A and Point B and use that information to determine the speed. The distance between two points can be calculated using the distance formula:

`Distance = √((x2 - x1)^2 + (y2 - y1)^2)`

Using the coordinates you provided:<br>
<code>
  Distance = √((-2.2388 - (-2.4138))^2 + (53.474 - 53.5872)^2)<br>
  Distance = √(0.175^2 + 0.1132^2)<br>
  Distance ≈ √(0.030625 + 0.01282924)<br>
  Distance ≈ √0.04345424<br>
  Distance ≈ 0.20851915<br>
</code>

Since the distance is in miles, I'll round it to approximately 0.21 miles.

Now, we know that the Time Duration Module determines it will take 78 minutes to travel this distance. So, the speed can be calculated using the formula:

- Speed = Distance / Time

Using the rounded distance of 0.21 miles and the given time of 78 minutes:

- Speed = 0.21 miles / 78 minutes
- Speed ≈ 0.00269231 miles per minute
- Speed ≈ 0.00269231 * 60 miles per hour
- Speed ≈ 0.1615386 miles per hour

Rounding the speed, I get approximately 0.16 miles per hour.
- Speed: Approximately <strong>0.16 miles per hour</strong>
- Distance: Approximately <strong>0.21 miles</strong>
- Expected Time: <strong>15.2 minutes</strong>

Therefore,
This means that based on the expected time and the calculated time

<strong>As a result, the code will print:</strong><br>
- There is an obstruction.<br>
- The obstruction is impenetrable.

## Task title: Implementing a Cascading Palindrome
A <strong>palindrome</strong> is a word, sentence, verse or number that reads the same backwards or forward. A typical <strong>palindrome</strong> class will accept a parameter such as a word or number and return true or false if the word is a palindrome. However, your task is to implement a cascading palindrome - a cascading palindrome in the context of this task means the following:

1. The class takes a parameter with several components. The parameter could be a word, a sentence, multiple numbers, etc. The parameter contains various items separated by space. 
2. The class determines the part of the parameter that is a <strong>palindrome</strong> and returns only the palindrome part of the parameter.
For clarity, consider these examples:

a. 1230321  returns 1230321 <br />
b. 1230321 09234 0124210 returns 1230321 0124210<br />
c. abcd5dcba 1230321 09234 0124210 returns abcd5dcba 1230321 0124210<br />

You can assume that the example structure above will always be the case for this task. For example, this sentence: "A man, a plan, a canal – Panama" is a palindrome; however, you don't need to consider such a case in your implementation.