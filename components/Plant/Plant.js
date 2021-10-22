import React from 'react';
import { Image, Text, View } from 'react-native';
import { plantStyles } from './Plant.styles';

export const Plant = ({plant}) => {
    const { name, image, water, sun } = plant;
    return (
        <View style={plantStyles.container}>
            <Image source={{uri: image}} style={plantStyles.image}/>
            <View style={plantStyles.content}>
                <Text style={plantStyles.title}>{name}</Text>
                <Text>Water: {water}</Text>
                <Text>Zon: {sun}</Text>
            </View>
        </View>
    );
}