exports.getCalcurator = (function() {
    var resValue = 0;
    var lastValue = 0;

    function clear() {
        resValue = 0;
        lastValue = 0;
    }

    function calc(sign, inputValue) {
        if (inputValue) {
            lastValue = inputValue;
        }

        switch(sign) {
            case "+":
                resValue += lastValue;
                break;
            case "-":
                resValue -= lastValue;
                break;
            case "*":
                resValue *= lastValue;
                break;
            case "/":
                resValue /= lastValue;
                break;
            case "%":
                resValue %= lastValue;
                break;
        }
    }

    return {
        clear: function() {
            clear();
            return resValue;
        },
        getValue: function() {
            return resValue;
        },
        plus: function(val) {
            calc("+", val);
            return resValue;
        },
        minus: function(val) {
            calc("-", val);
            return resValue;
        },
        times: function(val) {
            calc("*", val);
            return resValue;
        },
    }
})();