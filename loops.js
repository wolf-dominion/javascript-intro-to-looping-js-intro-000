function forLoop(array)
{
  for (let i = 0; i < 25; i++)
  {
    
    if (i === 1)
    {
      array.push("I am 1 strange loop.");
    }
    else
    {
      array.push("I am " + i +" strange loops.");
    }
  }
  return array;
}

function whileLoop(number)
{
  while(number > 0)
  {
    console.log(--number);
  }
  return "done";
}

function doWhileLoop(num) // was originally confused because I misunderstood the instructions,thought it was wanting me to substract an integer from i with each iteration, but it actually wanted me to write a code in which i was counting up to num
{
  var i = 0;
  function incrementVariable() {
  i = i + 1;
  return i;
}
  do 
  {
   console.log("I run once regardless."); 
  }
  while (incrementVariable() < num);
  
}