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