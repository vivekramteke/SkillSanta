//Q4. Consider the two functions below. Will they both return the same thing? Why or why
//not?
function foo1()
{
return {
bar: "hello"
};
}
function foo2()
{
return
{
bar: "hello"
};
}

//Ans:No,they both not return same thing because in function foo1 return is object ,foo2 is not a object
//after return { is there so it's consider as object 