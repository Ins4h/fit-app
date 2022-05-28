import * as React from 'react';
import { ToggleButton } from 'react-native-paper';
import { View, Text } from 'react-native';

const ToggleButtonLevel = () => {
  const [value, setValue] = React.useState('beginner');

  return (
    <ToggleButton.Row onValueChange={value => setValue(value)} value={value} style = {{justifyContent: 'center', backgroundColor: 'rgb(77,197,82)', borderRadius: 6}}>
      <ToggleButton icon={ () => <View><Text>Begineer</Text></View>} title="Beginner" value="beginner" style = {{ width: '30%', height: 50, color: 'black'}} color='black'>abc</ToggleButton>
      <ToggleButton icon={ () => <View><Text>Intermediate</Text></View>} title="Intermediate" value="intermediate" style = {{ width: '30%', height: 50}} />
      <ToggleButton icon={ () => <View><Text>Advanced</Text></View>} title="Advanced" value="advanced" style = {{ width: '30%', height: 50}} />
    </ToggleButton.Row>
  );
};

export default ToggleButtonLevel;




