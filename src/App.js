import React from 'react';

function Game({name, picture}) {
  //console.log(props);
  return (
    <div>
      <h2>I like {name} </h2>
      <img src={picture} />
    </div>
  );
}

const gameILike = [
  {
    name: "Super Mario",
    Image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.QU9n3smOnqBCrhizOBhn2AHaEK%26pid%3DApi&f=1'
  },
  {
    name: 'Kirby',
    Image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OjHfSuhz1-3BSVAxUrr1zgHaEK%26pid%3DApi&f=1'
  },
  {
    name: 'Animal Forest',
    Image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xsfCvv7IsCpCh85ap1CP9wHaEK%26pid%3DApi&f=1'
  },
  {
    name: 'Stardew Valley',
    Image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jfgPNLuu4l6Jv2gVF6sXogHaEK%26pid%3DApi&f=1'
  },
  {
    name: 'Horizon Zero Dawn',
    Image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.mu0YCNVkQ16YsYLdsGQHPAHaEK%26pid%3DApi&f=1'
  }
];

function App() {
  return (
    <div>
      {gameILike.map(dish=> (
      <Game name={dish.name} picture={dish.Image} />
      ))}
    </div>
  );
}

export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         