import React, {useState, useContext} from "react";
import { Text, View, StyleSheet, TextInput, Button} from "react-native";
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params: {})
  const {dispatch} = useContext(UsersContext)

  return (
    <View style={styles.form}>
      <View>
        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(name) => setUser({ ...user, name })}
          placeholder="Informe o nome..."
          value={user.name}
          cursorColor="orange"
        />
      </View>
      <View>
        <Text>E-mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => setUser({ ...user, email })}
          placeholder="Informe o e-mail..."
          value={user.email}
          cursorColor="orange"
        />
      </View>
      <View>
        <Text>URL do Avatar</Text>
        <TextInput
          style={styles.input}
          onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
          placeholder="Informe a URL..."
          value={user.avatarUrl}
          cursorColor="orange"
        />
      </View>
      <Button
        color="#fa983a"
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user,
          })
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form:{
    padding: 12,
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth:1,
    marginBottom: 10,
    cursorColor: 'orange'
  }
});
