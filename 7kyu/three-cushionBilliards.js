// Three - cushion billiards, also called three - cushion carom, is a form of carom billiards.The object of the game is to carom the cue ball off both object balls while contacting the rail cushions at least three times before contacting the second object ball.

// The table consists of 4 cushions(north, east, south and west)
// There are 3 balls(white, yellow, red)
// The cue ball is the ball that the player starts with (white and yellow are allowed to be picked)
// The object balls are the 2 remaining balls that the player did not pick to start with (red is always one of these balls)
// wiki link
// The billiards table
// n
//     + ----------------+
//    |                |
//    |                |
//    | R |
//    |                |
//         w |                | e
//         |                |
//    |                |
//    |                |
//    | W Y |
//    |                |
//     +----------------+
//         s
// Task
// Given an encoded string representing the collisions of the cue ball with object balls and cushions, return a boolean indicating whether a point was scored.You may assert the player hits a valid cue ball(white or yellow).

//     Input
// The input consists of a combination of zero, one or more occurences of the following chars:

// 'w', 'e', 'n', 's' - west, east, north and south cushion
// 'W', 'Y', 'R' - white, yellow and red ball
// Output
// return a boolean indicating whether a point is scored
// Conditions to score a point
// The cue ball must have made contact with the cushions at least three times before contacting the second object ball for the first time.
// Both object balls must be hit at least once.
// Additional info
// The cue ball may contact the cushions before or after hitting the first object ball.
// The cue ball does not have to contact three different cushions as long as it has been in contact with any cushion at least three times in total.
// Using a specific technique(a massé shot), it is possible to hit the same cushion multiple times in succession, curving the cue ball.
// It is allowed that both object balls collide a number of times, this is not encoded in the input and can be ignored altogether

function hasScored(s) {
    let hits = 0,
        scored = false,
        hitBalls = "";
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'n' || s.charAt(i) === 's' || s.charAt(i) === 'w' || s.charAt(i) === 'e') {
            hits++;
        } else {
            if (!hitBalls.includes(s.charAt(i))) {
                hitBalls += s.charAt(i);
            }
            if (hitBalls.length === 2) {
                return hits >= 3;
            }
        }
    }

    return false;
}

console.log(hasScored("YnesR"), true);
console.log(hasScored("RnesY"), true);
console.log(hasScored("WnesR"), true);
console.log(hasScored("wWnsR"), true);
console.log(hasScored("wnWsR"), true);
console.log(hasScored("wnsWR"), true);
console.log(hasScored("YneswR"), true);
console.log(hasScored("YnesRs"), true);
console.log(hasScored("YnesYR"), true);
console.log(hasScored("wnwYR"), true);
console.log(hasScored("wwwYR"), true);
console.log(hasScored("RnewRsYR"), true);
console.log(hasScored("nYYsYweR"), true);

console.log(hasScored("YneRw"), false);
console.log(hasScored("wYnwY"), false);
console.log(hasScored("neR"), false);
console.log(hasScored(""), false);
console.log(hasScored("YRnnenRY"), false);
console.log(hasScored("eRWewsnW"), false);
console.log(hasScored("wesseWee"), false);
console.log(hasScored("wwnenRRnR"), false);
console.log(hasScored("nWWWsnWs"), false);
console.log(hasScored("YeeRYRwRR"), false);