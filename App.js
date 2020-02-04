import React, { Component } from "react";
import Personagem from "./components/personagem";
import OptionPersonagem from "./components/option-personagem";
import api from "./service/api";
import "./global.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personagens: [],
      indexSelecionado: "",
      loading: false
    };
  }

  changeHandler = e => {
    this.setState({ indexSelecionado: e.target.value });
  };

  deletaPersonagemHandler = indexPersonagem => {
    if (indexPersonagem !== '') {
      const personagens = this.state.personagens;
      personagens.splice(indexPersonagem, 1);
      this.setState({ personagens: personagens });
    }
  };

  async componentDidMount() {
    this.setState({ loading: true });
    await api.get("people").then(response => {
      this.setState({ personagens: response.data.results, loading: false });
    });
  }

  render() {
    return (
      <div className="loading" id="app">
        {this.state.loading ? (
          <h2>Carregando...</h2>
        ) : (
          <div>
            <div className="grid">
              <select
                onChange={this.changeHandler}
                className="select-personagem card"
              >
                <option value="">SELECIONE UM PERSONAGEM</option>
                {this.state.personagens.map((personagem, index) => (
                  <OptionPersonagem
                    value={index}
                    id={index}
                    nome={personagem.name}
                  />
                ))}
              </select>

              <button
                onClick={e =>
                  this.deletaPersonagemHandler(this.state.indexSelecionado)
                }
                className="btn-excluir"
              >
                Excluir Personagem
              </button>
            </div>
            <main>
              <ul className="grid">
                {this.state.personagens
                  .sort((a, b) => a.name > b.name == 1)
                  .map((personagem, index) => (
                    <Personagem
                      id={index}
                      click={() => this.deletaPersonagemHandler(index)}
                      nome={personagem.name}
                      cor={personagem.eye_color}
                    />
                  ))}
              </ul>
            </main>
          </div>
        )}
      </div>
    );
  }
}
export default App;
