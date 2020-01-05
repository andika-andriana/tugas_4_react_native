import React, {Component} from 'react';
import {View, TextInput, Alert} from 'react-native';
import {Item, Container, Text, Button, Toast} from 'native-base';

export default class Containers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: '+',
      jumlah: 0,
      operand1: 0,
      operand2: 0,
    };
  }
  handleOperand1 = event => {
    this.setState({operand1: event});
  };

  handleOperand2 = event => {
    this.setState({operand2: event});
  };

  handleOperatorTambah = () => {
    this.setState({operator: '+'});
  };

  handleOperatorKurang = () => {
    this.setState({operator: '-'});
  };

  handleOperatorBagi = () => {
    this.setState({operator: '/'});
  };

  handleOperatorKali = () => {
    this.setState({operator: '*'});
  };

  hasil = () => {
    if (isNaN(this.state.operand1) || isNaN(this.state.operand2)) {
      Alert.alert('Gagal', 'Yang Anda Input Bukan Angka!');
    } else if (this.state.operator == '+') {
      this.setState({
        jumlah: Number(this.state.operand1) + Number(this.state.operand2),
      });
    } else if (this.state.operator == '-') {
      this.setState({jumlah: this.state.operand1 - this.state.operand2});
    } else if (this.state.operator == '/') {
      this.setState({jumlah: this.state.operand1 / this.state.operand2});
    } else {
      this.setState({jumlah: this.state.operand1 * this.state.operand2});
    }
  };

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Item>
          <TextInput
            keyboardType="numeric"
            placeholder="Masukan Angka"
            onChangeText={this.handleOperand1}
          />
        </Item>
        <Text
          style={{
            fontSize: 50,
            color: 'blue',
            textAlign: 'center',
            margin: 20,
          }}>
          {this.state.operator}
        </Text>
        <Item>
          <TextInput
            keyboardType="numeric"
            placeholder="Masukan Angka"
            onChangeText={this.handleOperand2}
          />
        </Item>
        <View style={{margin: 20}}>
          <Text
            style={{
              fontSize: 50,
              textAlign: 'center',
              padding: 10,
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              borderTopColor: 'grey',
              borderTopWidth: 1,
            }}>
            {this.state.jumlah}
          </Text>
          <Text style={{marginTop: 5}}>Operator</Text>
          <View style={{flexDirection: 'row'}}>
            <Button
              rounded
              style={{margin: 5}}
              onPress={this.handleOperatorTambah}>
              <Text>+</Text>
            </Button>
            <Button
              rounded
              style={{margin: 5}}
              onPress={this.handleOperatorKurang}>
              <Text>-</Text>
            </Button>
            <Button
              rounded
              style={{margin: 5}}
              onPress={this.handleOperatorBagi}>
              <Text>/</Text>
            </Button>
            <Button
              rounded
              style={{margin: 5}}
              onPress={this.handleOperatorKali}>
              <Text>*</Text>
            </Button>
            <Button rounded success style={{margin: 5}} onPress={this.hasil}>
              <Text>HITUNG</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
