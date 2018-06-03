
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: '',
      type: '',
      source: '',
      buttonClass: '',
      button: 0,
    }
  }

  render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.title}>360 Games</Text>
        <View style={styles.listMenu}>
          <View onInput={e => {
              const event = e.nativeEvent;
              const inputEvent = event.inputEvent;
              console.log(inputEvent);
              this.setState({
                action: inputEvent.action,
                type: inputEvent.type,
                source: inputEvent.source,
                buttonClass: inputEvent.buttonClass,
                button: inputEvent.button,
              });
            }}><Text style={styles.menuText}>Click here</Text></View>
          <Text style={styles.menuText}>Action: {this.state.action}</Text>
          <Text style={styles.menuText}>Type: {this.state.type}</Text>
          <Text style={styles.menuText}>Source: {this.state.source}</Text>
          <Text style={styles.menuText}>ButtonClass: {this.state.buttonClass}</Text>
          <Text style={styles.menuText}>Button: {this.state.button}</Text>
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
    width: 350,
    alignItems: 'center'
  },
  menuText: {
    fontSize: 30,
    maxWidth: 350,
    maxHeight: 50
  },
});
