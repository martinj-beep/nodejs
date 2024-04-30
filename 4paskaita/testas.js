module.exports = class Solution {
    constructor(api) {
      this.api = api;
      console.log('Press run code to see this in the console!')
      // You can initiate and calculate things here
    }
  
    /**
     * Return the total number of employees in the organization.
     * 
     * 
     * @return {number (integer)}
     */
    async getTotalNumberOfEmployees() {
      try {
        const response = await fetch(this.api.getNumberOfEmployeesAtLevel); // only later in the excercise realised how to approach it. SHould have extracted the top level employee, and checked what employees do they manage, place said information onto an array. Then run a forEach on the array, and check if any of employees in the array have employees that they manage themselves. This all should have been nested into if's and with each successful if execution, i would have added a plus one to a counter that counts the total amount of employees, and returned the result at the very end.
        const data = await response.json();
        if (Array.isArray(data)) {
          return data.length;
        } else {
          throw new Error("invalid data format. Expected an array.")
        }
      } catch (error) {
        console.error("Error fetching or processing data:", error);
        return -1;
      }
    }
  
    /**
     * Given a level in the hierarchy return the total number of employees on
     * that level.
     * 
     * @param {level} number (integer)
     * 
     * @return {number (integer)}
     */
    async getNumberOfEmployeesAtLevel(level) {
      try {
        const response = await fetch(this.api); // only later in the excercise realised how to approach it. In this excercise i should have used a function that would work in a similar way as the previous function, only where a series of ifs would run, out of time for the explanation even
        const data = await response.json();
        let count = 0;
        
        const countEmployeeAtLevel = (node, currentLevel) => {
          if (currentLevel === level) {
            count++;
          }
          if (node.hasOwnProperty("subordinates")) {
            node.subordinates.forEach(subordinate => {
              countEmployeesAtLevel(subordinate, currentLevel + 1)
            });
          }
        }
      }
      
      data.forEach(employee => {
        countEmployeesAtLevel(employee, 1)
      });
      
      return count;
    } catch (error) {
      console.error("error fetching or processing data", error);
      return -1
    }
  }