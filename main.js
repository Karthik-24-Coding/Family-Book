var reasons = [
    "Srinivas (Dad)",
    "Bhuvana (Mom)",
    "Hrithik (Brother)",
    "Karthik (Me)",
    "Mom and Dad",
    "Me and My Brother"
];

var images = [
    "https://lh3.googleusercontent.com/JzsjqOzPxU3qCDgqBvOe6CatOIcyxeynke-g5msRXOYh6pg84iGmhOZjf5oN1s55OB4e_NEsGULkF81lMbnjtPUriLp5VtVdSOJ9vvm0Ha9wK7UDA9tnw6LLTkGyGoVabQ=w1280",
    "https://lh5.googleusercontent.com/VRzWzZXc6kyy9_mClh67c5du5p9EutBcnVTgtV8KYJ7NBPRm1SdTL9fGL-g9Qr9eDQFYcym63a82YPpBn69MmAEDfjRCWL3n79uFqK4DSaPWCFuWND_u-tYcN4KqHQFnsg=w1280",
    "https://lh5.googleusercontent.com/Uy65MubVLKUADZSvg60zvgKjhLTez9HryMbW3JWKXQyafxzSXoGLQUmmXGjplBaItN27dox6GfoOWoKyLbtLuIrDxu1dKOMnEf7HJL0nLkwMMlR1pgnmaDUgAz3ls_SGDA=w1280",
    "https://lh6.googleusercontent.com/pRHvrf0rIcsqaNHVE38uO4j4EfmeJRumx3L3Gypi5WJF5Jszg2Tu6wlaaHS3pQzJ6aY_Qz4PtI13il8b_qH4euQjl306fh1vZrzQ5WYO-CdrQHuLusNYaNUYEjrGAOvUDA=w1280",
    "https://lh5.googleusercontent.com/0NN6eulrV7ugTMp9Kn3mfS4OS-22359RryJErnhgeU3E5G6gtlomepg-LTehHOghKatGxGnHCoso4ph5YLUWqDxZK00MogvAKUEgFMkHwOIk3vl6_JohKpqVDJteQmSuXQ=w1280",
    "https://lh6.googleusercontent.com/6zsqfKG_c0zsKfvFwx41XnVCNFaZJBAEoJGH5ZybO_dMJ9HF7qCJp-Ignup2igYhGIPAlP6u6dLQ3SThdYbexsNwwxWGOBEsMMR9lwT_7PDMsgS04r21NdveiHbBXMo4ag=w1280"
];

var i = 0;
function nextslide() {
    document.getElementById("myfamilybook").innerHTML = reasons [i];
    document.getElementById("familybook").src = images[i];
  i++;
}