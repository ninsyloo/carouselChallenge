import React from 'react';
import {View, Text} from 'react-native';
import {DATA} from '../../utils/endpoint';
import Carousel from '../components/Carousel';

export default function Home({navigation}){
    return(
        <View>
            <Carousel data ={DATA}/>
        </View>
    )
}