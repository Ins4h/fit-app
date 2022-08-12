import * as React from 'react';
import { ToggleButton } from 'react-native-paper';

const FitToggleButton: React.FC = (): JSX.Element => {
  const [value, setValue] = React.useState('male');

  return (
    <ToggleButton.Row onValueChange={value => setValue(value)} value={value}  style = {{justifyContent: 'center', backgroundColor: 'rgb(77,197,82)', borderRadius: 6}}>
      <ToggleButton color="white" icon="gender-male" value="male" style = {{ width: 75, height: 75, borderRadius: 10}}/>
      <ToggleButton color="white" icon="gender-female" value="female"  style = {{ width: 75, height: 75, borderRadius: 10}}/>
    </ToggleButton.Row>
  );
};

export default FitToggleButton;




