function calculate() {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            let operation = document.getElementById("operations").value;
            let result;

            if (isNaN(num1) || isNaN(num2)) {
                result = "Enter valid numbers";
            } else {
                switch (operation) {
                    case "add":
                        result = num1 + num2;
                        break;
                    case "subtraction":
                        result = num1 - num2;
                        break;
                    case "multiplication":
                        result = num1 * num2;
                        break;
                    case "division":
                        if (num2 === 0) {
                            result = "Cannot divide by zero";
                        } else {
                            result = num1 / num2;
                        }
                        break;
                    default:
                        result = "Invalid operation";
                }
            }

            document.getElementById("result").innerText = "Result: " + result;
        }
    