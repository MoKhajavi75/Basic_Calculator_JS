// Basic Calculator, JS by MohamadKh75
// 2017-07-19
// ******************** 

function calc()
{
    var x = document.getElementById('first_operand').value;
    var y = document.getElementById('second_operand').value;
    
    document.getElementById('sum').innerHTML = parseInt(x) + parseInt(y);
    document.getElementById('sub').innerHTML = parseInt(x) - parseInt(y);
    document.getElementById('multi').innerHTML = parseInt(x) * parseInt(y);
    document.getElementById('div').innerHTML = parseInt(x) / parseInt(y);
}
