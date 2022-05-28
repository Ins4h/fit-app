import * as React from 'react';
import { ToggleButton } from 'react-native-paper';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [value, setValue] = React.useState('male');

  return (
    <ToggleButton.Row onValueChange={value => setValue(value)} value={value}  style = {{justifyContent: 'center', backgroundColor: 'rgb(56,56,56)', borderRadius: 6}}>
      <ToggleButton icon={ () => <View><Text>Deadlift sumo</Text></View>} title="Beginner" value="beginner" style = {{ width: '55%', height: 50, color: 'black'}} color='black'>abc</ToggleButton>
      <ToggleButton icon={ () => <View><Text style = {{fontSize: 10, color: 'rgb(237,237,237)'}}>Difficulity</Text><Text>Hard</Text></View>} title="Intermediate" value="intermediate" style = {{ width: '30%', height: 50}} />
      <ToggleButton icon={ () => <View><Text>ADD</Text></View>} title="add" value="advanced" style = {{ width: '15%', height: 50, backgroundColor: 'rgb(77,197,82)'}} />
    </ToggleButton.Row>
  );
};

export default MyComponent;




