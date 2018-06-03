
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Menu extends React.Component {
   render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.title}>360 Games</Text>
        <View style={styles.listMenu}>
          <VrButton><Text style={styles.menuText}>Start</Text></VrButton>
          <VrButton><Text style={styles.menuText}>Options</Text></VrButton>
          <VrButton><Text style={styles.menuText}>Credits</Text></VrButton>
          <VrButton><Text style={styles.menuText}>Quit</Text></VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#639dda'
  },
  listMenu: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  menuText: {
    fontSize: 30,
  },
});
