import * as React from 'react';
import { ToggleButton } from 'react-native-paper';
import { View, Text } from 'react-native';
import uuid from "react-native-uuid";

const MyToggleButton = (props) => {
  const [value, setValue] = React.useState();

  const setToggleValue = (value) => {
    setValue(value)
    if (value === "add") {
      const exercise = {
        id: uuid.v4(),
        name: props.name,
        weights: 0,
        sets: 10,
        reps: 10,
        breaks: 60,
      }
      props.onAdd(exercise)
    }
  }

  return (
    <ToggleButton.Row
      onValueChange={value => setToggleValue(value)}
      value={value}
      style={{ justifyContent: 'center', backgroundColor: 'rgb(56,56,56)', borderRadius: 8, marginBottom: 16 }}
    >
      <ToggleButton
        icon={() => <Text>{props.name}</Text>}
        style={{ width: '55%', height: 48, color: 'black' }}
        color='black' />
      <ToggleButton
        icon={() => <View><Text style={{ fontSize: 10, color: 'rgb(237,237,237)' }}>Difficulty</Text><Text>{props.difficulty}</Text></View>}
        style={{ width: '30%', height: 48 }} />
      <ToggleButton
        icon={() => <Text>ADD</Text>}
        value={"add"}
        style={{ width: '15%', height: 48, backgroundColor: 'rgb(77,197,82)', borderRadius: 8 }} />
    </ToggleButton.Row>
  );
};

export default MyToggleButton;