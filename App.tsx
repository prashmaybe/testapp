// Basic React Native form with TextInputs and conditional Button visibility
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './style';

const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const isButtonVisible = input1.trim() !== '' && input2.trim() !== '';

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter first value"
        value={input1}
        onChangeText={setInput1}
        testID="input1"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter second value"
        value={input2}
        onChangeText={setInput2}
        testID="input2"
      />
      {isButtonVisible && (
        <Button title="Submit" onPress={() => {}} testID="submitButton" />
      )}
    </View>
  );
};

export default App;
