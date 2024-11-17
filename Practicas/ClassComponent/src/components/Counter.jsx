import React, { Component } from 'react';
import './Counter.css'; // Importamos el archivo CSS

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0
    };
  }

  aumentar = () => {
    this.setState(prevState => ({
      numero: prevState.numero + 1
    }));
  };

  disminuir = () => {
    this.setState(prevState => ({
      numero: prevState.numero - 1
    }));
  };

  resetear = () => {
    this.setState({
      numero: 0
    });
  };

  render() {
    return (
      <div className="contador">
        <h1 className="contador-numero">Contador: {this.state.numero}</h1>
        <div className="contador-botones">
          <button className="boton" onClick={this.aumentar}>Aumentar</button>
          <button className="boton" onClick={this.disminuir}>Disminuir</button>
          <button className="boton boton-resetear" onClick={this.resetear}>Resetear</button>
        </div>
      </div>
    );
  }
}

export default Contador;
