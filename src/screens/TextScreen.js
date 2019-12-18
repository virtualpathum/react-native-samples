import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <Text style={styles.text}>Enter Text: </Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={newValue => setName(newValue)} />
            <Text style={styles.text}>Hello! {name} </Text>
        </View>)

};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;
