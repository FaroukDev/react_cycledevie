import React, { Component } from 'react';
import './Cycledevie.css';



class Cycledevie extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', globalTitle: 'Le Cycle de vie',}
    }

    componentDidMount() {
        console.log("Formulaire rendu");
    }

    handleChange = e =>{ 
        this.setState({title : e.target.value});
    }

    submitForm = e =>{
        e.preventDefault()
        this.setState({globalTitle: `Mon formulaire - ${this.state.title}`});

    }

   

      
  render() {

    
      
    return (
        <div className="FormLife">
        <h1 >{this.state.globalTitle}</h1>
       
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Titre</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer"  />
            </div>
          </fieldset>
        </form>
       </div>
    );
  }
  componentDidUpdate(prevProps, prevState ) {
    if(prevState.globalTitle !== this.state.globalTitle){
      console.log("Titre changé")
    }
   
  }
  

}
export default Cycledevie;