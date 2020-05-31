import React, { useState, useEffect } from 'react';

import Header from './components/Header';

import './App.css';
import api from './service/api';
// import backgroundImage from './assets/photo.jpeg';

function App() {
  const [projects, setProjects] = useState([]);

 
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    }); 
  }, []);

  async function handleAddProject() {
    // projects.push(`Novo Projeto ${Date.now()}`);

    // setProjects([...projects, `Novo Projeto ${Date.now()}`]);

    const response = await api.post('projects', {
      title: "Mobile 4Help",
      owner: "Atirson Fabiano"
    });

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <Header title='Projects'/>

      {/* <img src={backgroundImage}/> */}

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type='button' onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );  
}

export default App;