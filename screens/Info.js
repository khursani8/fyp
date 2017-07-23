//import liraries
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet,View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";


// create a component
class Info extends Component {
  constructor(props) {
        super(props);
        this.state = {
             rows:<Text></Text>
        }
    }
    componentWillMount() {
    var rows1 = [];
    var {state} = this.props.navigation
      fetch('http://54.255.192.154:8000/information/'+state.params.bus_no)

      .then((response) => response.json())
      .then((responseJson) => {
         console.log('responseJsonkot',responseJson.res.length);
         {responseJson.res.map(function(object, i){
          if(responseJson.res.length-1 === i){
            rows1.push(<View key={i}>
            <Text>{object.current_Stop}</Text>
            <Text>           |</Text>
            <Text>           |  {object.bus_time} minutes</Text>
            <Text>           |</Text>
            <Text>          V</Text>
            <Text>{object.next_Stop}</Text>
            </View>
          )
        }
        else
          rows1.push(<View key={i}>
            <Text>{object.current_Stop}</Text>
            <Text>           |</Text>
            <Text>           |  {object.bus_time} minutes</Text>
            <Text>           |</Text>
            <Text>          V</Text>
            </View>
          )
        })
        this.setState({rows:rows1})
      }
      })

      .catch((error) => {
         console.error(error);
      });
  }
  render() {
    var {state} = this.props.navigation
    return (
      <ScrollView>
        <Grid style={styles.container}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text>{state.params.bus_no}</Text>
              <Col>
                  {this.state.rows}
              </Col>
            </View>
        </Grid>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
});

//make this component available to the app
export default Info;
