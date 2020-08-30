import React from "react";
import { Grid, Cell } from "react-mdl"


function Home() {
  return (
    
    <div style={{width: '100%', margin: 'auto'}}>
    <Grid className="landing-grid">
      <Cell col={12}>
      

        <div className="banner-text">
          <h1>Full Stack Web Developer</h1>

        <hr/>

      <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

   
        </div>
      </Cell>
    </Grid>
  </div>
)
}



export default Home;