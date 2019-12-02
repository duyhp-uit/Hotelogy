import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    const currentDate = new Date();
    this.state = {date:currentDate}
  }
  render(){
    const currentDate = new Date();
    return (
        <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate={currentDate}
            maxDate="01-06-2099"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
            dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
            },
            dateInput: {
                marginLeft: 36
            }
            // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {this.setState({date: date})}}
        />
    )
  }
}