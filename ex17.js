// Exercise 17: Retrieve the largest rating.
//
//     Let's use our new reduce function to isolate the largest value in an array of ratings.


function() {
    var ratings = [2,3,1,4,5];

    // You should return an array containing only the largest rating. Remember that reduce always
    // returns an array with one item.
    return ratings.
        reduce( (acc, current) => {
            if(current >acc){
                return current;
            }else{
                return acc;
            }
        },Number.MIN_VALUE)   // Complete this expression
}
