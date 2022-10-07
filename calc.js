function Operation(operand) { 
				

    var firstValue = parseInt(document.getElementById('primerNumero').value);
    var secondValue = parseInt(document.getElementById('segundoNumero').value);				
    var result = 0;
    switch(operand){

        case '+' : 	result = ( (x, y) => {	return x + y; } )( firstValue, secondValue );
                    break;

        case '-' : 	result = ( (x, y) => {	return x - y; } )( firstValue, secondValue );
                    break;
        case '*' : 	result = ( (x, y) => {	return x * y; } )( firstValue, secondValue );
                    break;
        case '/' : 	result = ( (x, y) => {	return x / y; } )( firstValue, secondValue );
                    break;
    }
    
    alert("El resultado es: "result);
}
