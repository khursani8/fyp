//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import ModalPicker from 'react-native-modal-picker'

// create a component
class Search extends Component {
  componentWillMount() {
    var index=0
    fetch('http://54.255.192.154:8000/listBus')  //listBus
      .then((data)=>data.json())
      .then((dataJson)=>{
        this.setState({data:dataJson.map((el)=>({key:index++,label:el.label}))})
      })
    fetch('http://54.255.192.154:8000/listRoute/')  //list Route
      .then((data)=>data.json())
      .then((dataJson)=>{
        this.setState({data:dataJson.map((el)=>({key:index++,label:el.label}))})
      })
    fetch('http://54.255.192.154:8000/listBus')  //List Stop
      .then((data)=>data.json())
      .then((dataJson)=>{
        this.setState({data:dataJson.map((el)=>({key:index++,label:el.label}))})
      })
  }

  constructor(props) {
        super(props);
        this.state = {
            textInputValue: '',
            data:[]
        }
    }
  render() {
    return (
      <View style={{flex:1, justifyContent:'space-around', padding:50}}>
              <Text>
                Select Route
              </Text>
              <ModalPicker
                    data={this.state.data}
                    initValue=""
                    onChange={(option)=>{
                      this.setState({textInputValue:option.label})
                      this.props.navigation.navigate('BusList',{no:option.label});
                    }
                     }>
                    <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:10, height:50}}
                        editable={false}
                        placeholder="Select Route!"
                        value={this.state.textInputValue} />
                </ModalPicker>

                <Text>
                Select Bus Number
              </Text>
              <ModalPicker
                    data={this.state.data}
                    initValue=""
                    onChange={(option)=>{
                      this.setState({textInputValue:option.label})
                      this.props.navigation.navigate('BusList',{no:option.label});
                    }
                     }>
                    <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:10, height:50}}
                        editable={false}
                        placeholder="Select Bus Number!"
                        value={this.state.textInputValue} />
                </ModalPicker>

                <Text>
                Select Stop
              </Text>
              <ModalPicker
                    data={this.state.data}
                    initValue=""
                    onChange={(option)=>{
                      this.setState({textInputValue:option.label})
                      this.props.navigation.navigate('BusList',{no:option.label});
                    }
                     }>
                    <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:10, height:50}}
                        editable={false}
                        placeholder="Select Stop!"
                        value={this.state.textInputValue} />
                </ModalPicker>
            </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Search;
