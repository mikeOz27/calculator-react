import { useState, useEffect, ChangeEvent, KeyboardEvent, MouseEvent  } from "react";

function Operation() {
  const [display, setDisplay] = useState("");
  const [equation, setEquation] = useState("");
  const [expression, setExpression] = useState("");

  const d = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.textContent; // Usa textContent para obtener el texto del botón
    console.log("Valor del botón:", value);
    setDisplay((prev) => prev + value);  // Actualiza el display
    setExpression((prev) => prev + value); // Actualiza la expresión
  };

  const op = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (["+", "-", "*", "/"].includes(value)) {
      setExpression(expression + value);
      setDisplay("");
      setEquation(`${expression} ${value}`);
    } else if(value === "rz") {
      setDisplay(Math.sqrt(parseInt(expression)));
      setExpression(Math.sqrt(parseInt(expression)).toString());

    }else if (value === "=") {
      try {
        let res = eval(expression);
        setDisplay(res);
        setExpression(res.toString());
        setEquation("");
      } catch (error) {
        setDisplay("Error");
        setExpression("");
        setEquation("");
      }
    } else if (value === "C") {
        setDisplay("");
      setExpression("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    const value = e.key;
    if (/^\d$/.test(value)) {
      setDisplay(display + value);
      setExpression(expression + value);
    } else if (["+", "-", "*", "/"].includes(value)) {
      setExpression(expression + value);
      setDisplay("");
    } else if (value === "Enter") {
      try {
        let res = eval(expression);
      setDisplay(res);
        setExpression(res.toString());
      } catch (error) {
        setDisplay("Error");
        setExpression("");
      }
    } else if (value === "Backspace") {
      setDisplay(display.slice(0, -1));
      setExpression(expression.slice(0, -1));
    } else if (value === "Escape") {
      setDisplay("");
      setExpression("");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      handleKeyPress(e);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [display, expression]);

  return {
    display,
    equation,
    d,
    op,
  };
}

export default Operation;
