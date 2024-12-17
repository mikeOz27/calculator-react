import { Container, Button } from "react-bootstrap";
import Op from "./Operation";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/calculadora.css"

const Calculadora = () => {
  const { display, equation, d, op } = Op();

  return (
    <Container className="d-flex justify-content-center align-items-center cont min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="calculator">
        <div className="text-center" style={{color: '#373b3e'}}>
          <h1>Calculadora</h1>
        </div>
        <span className="equation">{equation}</span>
        <br />
        <textarea
          id="display"
          value={display}
          className="calculator__display"
          disabled
          placeholder="0"
        />
        <div className="calculator__keys">
          <Button className="btn-c" id="clear" value="C" onClick={op}>
            C
          </Button>
          <Button id="divide" value="/" className="btn-op" onClick={op}>
            /
          </Button>
          <Button id="multiply" value="*" className="btn-op" onClick={op}>
            *
          </Button>
          <Button id="subtract" value="-" className="btn-op" onClick={op}>
            -
          </Button>
          {[7, 8, 9].map((num) => (
            <Button key={num} onClick={d} className="btn-num">
              {num}
            </Button>
          ))}
          <Button
            id="add"
            value="+"
            className="btn-op"
            style={{ gridColumn: "span 1" }}
            onClick={op}
          >
            +
          </Button>
          {[4, 5, 6].map((num) => (
            <Button key={num} onClick={d} className="btn-num">
              {num}
            </Button>
          ))}
          <Button className="btn-equal" id="equals" value="=" onClick={op}>
            {" "}
            =
          </Button>
          {[1, 2, 3].map((num) => (
            <Button key={num} onClick={d} className="btn-num">
              {num}
            </Button>
          ))}

          <Button
            id="zero"
            value="0"
            style={{ gridColumn: "span 2" }}
            onClick={d}
            className="btn-num"
          >
            0
          </Button>

          <Button id="decimal" value="." onClick={d} className="btn-num">
            .
          </Button>
          <Button id="decimal" value="rz" onClick={op} className="btn-rz">
            rz
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Calculadora;
