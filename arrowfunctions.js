function traditional_add(a,b){
    return a+b;
}

const traditional_arrow_function = function (a, b){
    return a+b;
}

const no_function_keyword = (a, b) => {
    return a+b;
}

const same_line_execution_statement = (a,b) => a+b;

const only_one_parameter = a => a+30;

const no_parameter = () => 20+30;

const no_parameter1 = add => 20+30;

console.log(traditional_add(20,30));
console.log(traditional_arrow_function (20, 30));
console.log (no_function_keyword(20,30));
console.log(same_line_execution_statement(20,30));
console.log(only_one_parameter(20));
console.log(no_parameter());
console.log(no_parameter1());