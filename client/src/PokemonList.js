import React, { Component } from 'react';

import './App.css';

class PokemonList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            data: {
                results: []
            },
            poke: []
        };
    }

    componentDidMount() {
        this.loadPokedexData();
        // this.fetchimg()
    }
    loadPokedexData=()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
            .then(results=>results.json())
            .then(pokeData=>this.setState({results:pokeData}))
    };

    fetchimg=(uri_dest)=>{
        var imgurl='';
        console.log(uri_dest);
     fetch(uri_dest)
         .then(poke=>poke.json())
         .then(imageData=>{
             // console.log(imageData);
             imgurl=imageData.sprites.front_default;
             // console.log(imgurl);
             this.setState({poke: imgurl});
             return (imgurl)
         });

        // console.log("***"+imgurl);
        // return imgurl;

    };

    render() {

        console.log(this.state.data.results);

        let pokeList = this.state.data.results.map(

            (pokemon, index) => {
                let thisImg = this.fetchimg(pokemon.url);
                console.log(thisImg);
                return(

                    <div>
                        <img src={thisImg} alt=""/>
                        <h2>Name: {pokemon.name}</h2>
                        {/*<p>Number: {thisImg}</p>*/}
                    </div>
            )
            }
        );

        return (
            <div>
                <h1>Pokemon List</h1>
                {pokeList}
            </div>
        );
    }
}

export default PokemonList;