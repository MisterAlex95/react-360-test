import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Model,
  PointLight,
  asset
} from 'react-360';
import Menu from './src/components/Menu';

export default class test360 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textColor: 'white',
      lightColor: 'white',
      rotation: 0
    };
    console.log(getControllers());
    this.lastUpdate = Date.now();
    this.rotate = this.rotate.bind(this);
  }

  rotate() {
    const now = Date.now();
    const delta = now - this.lastUpdate;
    this.lastUpdate = now;

    this.setState({rotation: this.state.rotation + delta / 20});
    this.frameHandle = requestAnimationFrame(this.rotate);
  }

  componentDidMount() {
    this.rotate();
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <View style={{height: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{backgroundColor: 'red', width: 50, height: 50}}
              onEnter={() => this.setState({lightColor: 'red'})}
              onExit={() => this.setState({lightColor: 'white'})}>
            </View>
            <Text>The table will change color when you look at one of the square.</Text>
            <View
              style={{backgroundColor: 'green', width: 50, height: 50}}
              onEnter={() => this.setState({lightColor: 'green'})}
              onExit={() => this.setState({lightColor: 'white'})}>
            </View>
          </View>
          <Text style={styles.greeting}>
            Just a simple text of React 360
          </Text>
          <Text
            style={{color: this.state.textColor}}
            onEnter={() => this.setState({textColor: 'red'})}
            onExit={() => this.setState({textColor: 'white'})}>
            This text will turn red when you look at it.
          </Text>
        </View>
        <Model
          style={{
            transform: [
              {translate: [0, -200, -100]},
              {scale: 1},
              {rotateY: this.state.rotation},
              {rotateX: 45},
            ],
          }}
          source={{
            obj: asset('table.obj'),
            mtl: asset('table.mtl'),
          }}
          lit={true}
        />
        <PointLight style={{color: this.state.lightColor, transform: [{translate: [0, 200, -100]}]}} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('test360', () => test360);
AppRegistry.registerComponent('Menu', () => Menu);
