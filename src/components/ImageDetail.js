import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

const ImageDetail = ({ imageSource, title, score }) => {
    return <View>
        <Image source={imageSource} />
        <Text style={styles.textStyle}>{title}</Text>
        <Text style={styles.textStyle}>Image Score - {score}</Text>
    </View>

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ImageDetail;