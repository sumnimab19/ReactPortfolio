import React from "react";
import { Grid, Cell } from "react-mdl"

import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io"
import { FaReact, FaNpm } from "react-icons/fa"
import { DiMysql, DiMongodb } from "react-icons/di"
import ReactTooltip from "react-tooltip";

function Home() {
  return (
    <div style={{width: '100%', margin: 'auto'}}>
    <Grid className="landing-grid">
      <Cell col={12}>
        <div className="banner-text">
          <h1>Sumnima Bhandari</h1>
          <h4>Experienced Software Quality Assurace Analyst || Full Stack Web Developer with a passion for user experience.</h4>
          <div data-aos="fade-right" style={{ marginTop: "8%", marginBottom: "8%" }}>
              <h3 style={{ fontWeight: "bold" }}>Skills</h3>
              <br></br>
              <a data-tip="HTML"> <i><AiFillHtml5 size={50} /></i> </a>
              <ReactTooltip place="bottom" type="dark" effect="float"/>
              <a data-tip="MongoDB"><i style={{ marginLeft: "2%" }} ><DiMongodb size={50} /></i></a>
              <a data-tip="React"><i style={{ marginLeft: "2%" }}><FaReact size={50} /></i></a>
              <a data-tip="CSS"><i style={{ marginLeft: "2%" }}><IoLogoCss3 size={50} /></i></a>
              <a data-tip="Jacascript"><i style={{ marginLeft: "2%" }}><IoLogoJavascript size={50} /></i></a>
              <a data-tip="Node"><i style={{ marginLeft: "2%" }}><IoLogoNodejs size={50} /></i></a>
              <a data-tip="npm"><i style={{ marginLeft: "2%" }}><FaNpm size={50} /></i></a>
              <a data-tip="Mysql"><i style={{ marginLeft: "2%" }}><DiMysql size={50} /></i></a>
          </div>

          <br></br>  <br></br> 

          <h4 style={{ fontWeight: "bold" }}>Connect with Me</h4>
           {/* LinkedIn */}
           <a href="https://www.linkedin.com/in/sumnima-bhandari-706765196/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square linkedin" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/sumnimab19" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square github" aria-hidden="true" />
          </a>
           <br></br>
       </div>
      </Cell>
    </Grid>
  </div>
)
}


export default Home;