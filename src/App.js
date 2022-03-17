import React, {useState} from 'react';
import './App.css';
import * as d3 from 'd3';
import 'bootstrap/dist/css/bootstrap.css';
import { Views } from './Components/Views/Views';
import { Degree } from './Components/Degrees/Degree';
import Map from './Map'
import Pie from './Pie';
import ScatterPlot from './ScatterPlot';
import {/*getMapData,*/ getPieData,getScatterData} from './utils/data'

const nodesAccessor = d => d.nodes;
const linksAccessor = d => d.links;
const scatterProjects = d=>d;
const scatterCount = d=>d.length;

const idAccessor = d => d.id;
const nameAccessor = d => d.name;
const genderAccessor = d => d.gender;
const ageAccessor = d => d.age;
const areaAccessor = d => d.area;
const dlnpAccessor = d => d.dlnp; //[]
const academic_adviserAccessor = d => d.academic_adviser;
const instituteAccessor = d => d.institute;
const doctor_work_titleAccessor = d => d.doctor_work_title;
const doctor_work_year = d => d.doctor_work_year;
const phd_teacherAccessor = d => d.phd_teacher; //[]
const phd_titleAccessor = d => d.phd_title;
const phd_yearAccessor = d => d.phd_year;
const departmentAccessor = d => d.department;
const master_teacherAccessor = d => d.master_teacher;
const master_work_titleAccessor = d => d.master_work_title;
const master_work_yearAccessor = d => d.master_work_year;
const cityAccessor = d => d.city;
const latAccessor = d => d.lat;
const lonAccessor = d => d.lon;
const projectsAccessor = d => d.projects; //[{}]

const getData = () =>({
  //map: getMapData(),
  //scatter: getScatterData(),
  pie: getPieData(),
  scatter: getScatterData(),
})

const App = () => {

  const [data, setData] = useState(getData());
  console.log(data.scatter)

    return (
      <div>
        <div className="Form">
          <Degree />
          <Views />
        </div>
        <div className="App__charts">
          <Pie
            data={data.pie} /> 
          <ScatterPlot
            data={data.scatter}
            xAccessor={scatterCount}
            yAccessor={scatterProjects}
            xLabel='Participants'
            yLabel='Projects' />
            <Map
           //   data={data.map}
              nodesAccessor={nodesAccessor}
              linksAccessor={linksAccessor}
              label='Map' />
        </div>
      </div>
    )

}

export default App;
