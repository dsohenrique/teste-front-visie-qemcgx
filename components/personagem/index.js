import React, { Component } from "react";
import './styles.css';

class Personagem extends Component {
  render() {
    return (
      <li className="personagem-card" key={this.props.id}>
        <div>
          <strong style={{ color: this.props.cor }}>{this.props.nome}</strong>
        </div>
        <div className="personagem-buttons">
          <button className="btn-excluir" onClick={this.props.click}>Excluir</button>
        </div>
      </li>
    );
  }
}

export default Personagem;