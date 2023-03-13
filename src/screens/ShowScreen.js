import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const ShowScreen = ({route}) => {
    const { state } = useContext(Context);
    const param = route.params.id
    const blogPost = state.find((blogPost) => blogPost.id === param )
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};


const styles = StyleSheet.create({});

export default ShowScreen;
