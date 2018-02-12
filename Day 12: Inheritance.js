class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor (firstName, lastName, identification, testScores) {
        super(firstName, lastName, identification);
        this.testScores = testScores;
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        let result = 0;
        for (let i = 0; i < this.testScores.length; ++i) {
            result += this.testScores[i];
        }
        result /= this.testScores.length;
        if (result < 40) {
            return "T";
        }
        else if (result >= 40 && result < 55) {
            return "D";
        }
        else if (result >= 55 && result < 70) {
            return "P";
        }
        else if (result >= 70 && result < 80) {
            return "A";
        }
        else if (result >= 80 && result < 90) {
            return "E";
        }
        else if (result >= 90 && result <= 100) {
            return "O";
        }
    }
}
