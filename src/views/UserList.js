import React, {useContext} from 'react'
import { Text, View, StyleSheet, FlatList, Alert} from 'react-native'
import users from '../data/Users'
import { ListItem, Avatar, Icon, Button } from "@rneui/themed";
import UsersContext from '../context/UsersContext'

export default props => {
    //console.warn(Object.keys(props))
    const { state, dispatch} = useContext(UsersContext)

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                      type: 'deleteUser',
                      payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
      return (
        <View style = {{flexDirection: 'row'}}>
          <Button
            onPress={() => props.navigation.navigate("UserForm", user)}
            type="clear"
            icon=<Icon name="edit" size={25} color="orange" />
          />
          <Button
            onPress={() => confirmUserDeletion(user)}
            type="clear"
            icon=<Icon name="delete" size={25} color="red" />
          />
        </View>
      );
    }

    function getUserItem({item: user}){
        return (
          <ListItem
            bottomDivider
            topDivider
            onPress={() => props.navigation.navigate("UserForm", user)}
          >
            <Avatar source={{ uri: user.avatarUrl }} />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
            {getActions(user)}
          </ListItem>
        );
    }

    

    return (
        <View>
             <FlatList 
                keyExtractor={user => user.id.toString()}
                data = {state.users}
                renderItem={getUserItem}
             />
        </View>
    )
}

const styles = StyleSheet.create({

})