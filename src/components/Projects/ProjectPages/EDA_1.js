import React from 'react'
import { Jupyter } from 'react-jupyter'
import JupyterViewer from "react-jupyter-notebook";
import nb_test from "../../../Assets/ipynb.json";

function EDA_1() {
  return (
    <div>
    <JupyterViewer rawIpynb={nb_test}/>
    </div>
  )
}

export default EDA_1
