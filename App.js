import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class App extends React.Component {

  constructor() {

    super();

    this.state = {

      name: '',

    };

  }

  speak = () => {

    var thingToSay = this.state.name;

    this.state.name === ''

      ? alert('Please Enter a word')
      : Speech.speak(thingToSay);

  };

  render() {

    return (

      <SafeAreaProvider>

        <View style={styles.textContainer1}>

          <Header

            backgroundColor={'#07B89E'}

            centerComponent={

              {

                text: 'Text To Speech Converter',
                style: { color: 'black', fontSize: 25, fontWeight: 700 },

              }

            }

          />

          <Image

            style={styles.imageIcon}

            source={

              {

                uri:
                  'https://img.utdstc.com/icons/voice-to-text-text-to-speech-android.png:225',

              }

            }

          />

          <Text style={styles.text1}>

            Enter The Word

           </Text>

          <TextInput

            style={styles.inputBox}

            onChangeText={(text) => {

              this.setState({ name: text });

            }}

            value={this.state.name}

          />

          <View>

            <TouchableOpacity style={styles.button} onPress={this.speak}>

              <Text style={styles.text2}>

                Click Here To Hear Speech

               </Text>

            </TouchableOpacity>

          </View>

        </View>

      </SafeAreaProvider>

    );

  }

}

const styles = StyleSheet.create({

  inputBox: {

    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
    height: 60,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',

  },

  textContainer1: {

    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',

  },

  text1: {

    color: 'black',
    fontSize: 40,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',

  },

  text2: {

    color: 'black',
    fontSize: 41,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',

  },

  button: {

    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#07B89E',
    marginTop: 80,
    borderRadius: 50,
    width: '38%',
    alignSelf: 'center',
    height: 125,

  },

  imageIcon: {

    width: 165,
    height: 165,
    marginLeft: 595,

  },

}

);