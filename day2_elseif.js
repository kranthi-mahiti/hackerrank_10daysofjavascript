
// Complete the getGrade(score) function in the editor. It has one parameter: an integer,score , 
// denoting the number of points Julia earned on an exam. It must return the letter corresponding to her 
//  grade according to the following rules:

// If 25 < score <=30, then grade = A.
// If 20 < score <=25, then grade = B.
// If 15 < score <=20, then grade = C.
// If 10 < score <=15, then grade = D.
// If 5 < score <=10, then grade = E.
// If 0 < score <=5, then grade = F.

// Input Format
// Stub code in the editor reads a single integer denoting  from stdin and passes it to the function.

// Constraints
//     0 <= score <= 30

// Output Format
// The function must return the value of grade (i.e., the letter grade) that Julia earned on the exam.

// Sample Input 0
// 11

// Sample Output 0
// D

// Explanation 0
// Because score=11, it satisfies the condition 10 < score <=15 (which corresponds to D). Thus, we return D as our answer.




$(document).ready(function(){
    function gradeScore(score) {
        this.score = score;
        let grade;
        if(this.score >= 25 && this.score <=30 ) {
            grade = 'A';
        } else if(this.score > 20 && this.score <= 25 ) {
            grade = 'B';
        } else if(this.score > 15 && this.score <= 20) {
               grade = 'C';   
        } else if(this.score > 10 && this.score <= 15) {
               grade = 'D';   
        } else if(this.score > 5 && this.score <= 10) {
               grade = 'E';   
        } else if(this.score > 0 && this.score <= 5) {
               grade = 'F';   
        }
        return grade;
    }
    gradeScore(10);
});