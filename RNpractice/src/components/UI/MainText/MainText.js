import React from 'react';
import { Text, StyleSheet } from 'react-native';

const mainText = props => (
    <Text
    style={styles.maintText}
    > 
    {props.children}
    </Text>
);

const styles = StyleSheet.create({
    maintText: {
        color: "black",
        backgroundColor: "transparent"
    }
})

export default mainText;