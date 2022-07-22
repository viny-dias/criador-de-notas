import React from "react";
import { Component } from "react";
import './estilo.css';

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        // this.titulo = '';
        // this.texto = '';
        // this.categoria = 'Sem categoria';
        this.state = { categorias: [], titulo: '', texto: '', categoria: 'Sem categoria' };

        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias) {
        this.setState( {...this.state, categorias} );
    }

    _handleMudancaCategoria(evento) {
        evento.stopPropagation();
        // this.categoria = evento.target.value;
        this.setState( { ...this.state, categoria: evento.target.value} );
    }

    _handleMudancaTitulo(evento) {
        evento.stopPropagation();
        // this.titulo = evento.target.value;
        this.setState( { ...this.state, titulo: evento.target.value} );
    }

    _handleMudancaTexto(evento) {
        evento.stopPropagation();
        // this.texto  = evento.target.value;
        this.setState( { ...this.state, texto: evento.target.value} );
    }

    _criarNota(evento) {
        evento.preventDefault(); //para não executar o comportamento padrão (tentar enviar o form)
        evento.stopPropagation(); //evita a propagação do evento no DOM
        this.props.criarNota(this.state.titulo, this.state.texto, this.state.categoria); //chamando a propriedade "criarNota" da instância "FormularioCadastro"

        this.setState( {...this.state, titulo: '', texto: '', categoria: 'Sem Categoria'} );
    }

    render() {
        const {categorias} = this.props; 
        console.log(categorias);

        return (
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>

                <select className="form-cadastro_input" onChange={this._handleMudancaCategoria.bind(this)} >
                    <option>Sem categoria</option>

                    {categorias.categorias.map((categoria, index) => {
                        return <option key={index}>{categoria}</option>
                    })}
                </select>

                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input" 
                    onChange={this._handleMudancaTitulo.bind(this)} //bind() - associa o evento a instância que está sendo criada
                    value={this.state.titulo}
                />

                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}
                    value={this.state.texto}
                />

                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
                
            </form>
        );
    }
}

export default FormularioCadastro;