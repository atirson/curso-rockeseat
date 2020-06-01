import React, { useEffect, useState } from 'react';
import {SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity} from 'react-native';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Atirson Fabiano'
    });

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159c1'/>

      <SafeAreaView style={styles.container}>
        <FlatList 
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text styles={styles.project}>{project.title}</Text>
          )}
        />



        <TouchableOpacity 
          activeOpacity={0.8}
          style={styles.button} 
          onPress={handleAddProject}
        >
          <Text style={styles.text}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
      {/* <View style={styles.container}>
        {projects.map(project => (
          <Text styles={styles.project} key={project.id}>{project.title}</Text>
        ))}
      </View> */}
    </>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  }, 

  title: {
    color: '#FFF',
    fontSize: 20,
  },

  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 16,
    color: '#FFF',
  },
});
 