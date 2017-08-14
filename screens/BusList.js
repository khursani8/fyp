//import liraries
import React, { Component } from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";


// create a component
class BusList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows:<Text></Text>
    }
  }
  componentWillMount() {
    const { navigate } = this.props.navigation;
    console.log('inside BusList page');
    busNo = this.props.navigation.state.params.no
    var rows1 = [];
    fetch('http://54.255.201.153:8000/getETA/')
      .then((data)=>data.json())
      .then((dataJson)=>{
        console.log(dataJson);
        {dataJson.res[2].map(function(object, i){
          console.log(i);
          rows1.push(
            <Row style={{height:100}} key={i}>
            <Col style={styles.col}>
              <Row style={styles.col}>
                <Button light onPress={()=>navigate('Info',{bus_no:busNo})} title={busNo}></Button>
              </Row>
            </Col>
            <Col style={styles.col}>
              <Row>
              <Text>Start: {object.RouteStart}</Text>
              </Row>
              <Row>
              <Text>End: {object.RouteEnd}</Text>
              </Row>
              <Row>
              <Text>ETA {object.eta} MIN</Text>
              </Row>
              <Row>
              <Text>CURRENT: {object.bus_location}</Text>
              </Row>
            </Col>
            </Row>
          )

          
        })}
          this.setState({rows:rows1})
        
      })
      
  }
  render() {
    return (
      <View>
        <Grid>
             {this.state.rows}
       </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  col:{
    height:75
  }
});

//make this component available to the app
export default BusList;
