import React, { Component } from 'react';

export default class addObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: '',
      descripcion: '',
      tipo: '',
      talla: '',
      pminimo: '',
      pmaximo:'',
      foto:''
    };
    this.change = this.change.bind(this);
  }
    
  change (event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      [event.target.name]: value
    });
  }

  onSubmit = e =>{
      e.preventDefault();
      this.props.onSubmit(this.state);
      
      this.setState({
        titulo: '',
        descripcion: '',
        tipo: '',
        talla: '',
        pminimo: '',
        pmaximo:'',
        foto:''
      });
      
  }


  onSignUp() {
    // Grab state
    const {
      signUpEmail,
      signUpPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signUpEmail,
        password: signUpPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Titulo:
            <input name ="titulo" type="text" value={this.state.titulo} onChange={this.change} />
          </label>
            
          <label>
            Descripcion:
            <input name ="descripcion" type="text" value={this.state.descripcion} onChange={this.change} />
          </label>
          <label>
            Tipo:
            <input name ="tipo" type="text" value={this.state.tipo} onChange={this.change} />
          </label>
          <label>
            Talla:
            <input name ="talla" type="text" value={this.state.talla} onChange={this.change} />
          </label>
          <label>
            Precio minimo:
            <input name ="pminimo" type="text" value={this.state.pminimo} onChange={this.change} />
          </label>
          <label>
            Precio maximo:
            <input name ="pmaximo" type="text" value={this.state.pmaximo} onChange={this.change} />
          </label>
          <label>
            Imagen:
            <input name ="foto" type="text" value={this.state.foto} onChange={this.change} />
          </label>

          <button onClick={e=>this.onSubmit(e)}>Enviar</button> 
        </form>        
      </div>
    );
  }
}