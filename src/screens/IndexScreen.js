import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../context/BlogContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrashAlt, faPlus} from '@fortawesome/free-solid-svg-icons';

const IndexScreen = ({navigation}) => {
  const {state, addBlogPost, deleteBlogPost} = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', {id: item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    style={styles.icon}
                    size={24}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = () => {
  return {
    headerRight: <FontAwesomeIcon icon={faPlus} size={30} />,
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
