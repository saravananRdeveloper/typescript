// function outerfunction(){
//     console.log("This is Outer function");
// };
// outerfunction();

function outerfunction(){
    let count = 0;
    function innerfunction(){
        count++;
        console.log( count);
    }
    return innerfunction;
};
let demo  = outerfunction();
demo();
demo();
demo();