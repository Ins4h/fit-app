import * as React from 'react';
import { ToggleButton } from 'react-native-paper';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [value, setValue] = React.useState('male');

  return (
    <ToggleButton.Row onValueChange={value => setValue(value)} value={value}  style = {{justifyContent: 'center', backgroundColor: 'rgb(77,197,82)', borderRadius: 6}}>
      <ToggleButton icon={ () => <View><Text>List of exercises</Text></View>} title="Beginner" value="prepared" style = {{ width: '50%', height: 50, color: 'black'}} color='black'>abc</ToggleButton>
      <ToggleButton icon={ () => <View><Text>Your added exercises</Text></View>} title="Intermediate" value="own" style = {{ width: '50%', height: 50}} />
    </ToggleButton.Row>
  );
};

export default MyComponent;




