import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

const televisions = [
  {
    id: 1,
    name: "Samsung",
  },
  {
    id: 2,
    name: "Sony",
  },
  {
    id: 3,
    name: "LG",
  },
];

export default function App() {
  const [formData, setFormData] = useState(
    televisions.reduce((acc, val) => {
      acc[val.id] = {
        name: val.name,
      };
      return acc;
    }, {})
  );

  const updateTelevision = (id, property, value) => {
    setFormData((formData) => ({
      ...formData,
      [id]: {
        [property]: value,
      },
    }));
    console.log(formData);
  };


  return (
    <View style={styles.appContainer}>
      <View>
        <Text>Tele mobile</Text>
      </View>
      <View>
        {televisions.map((tv) => {
          return (
            <View key={tv.id}>
              <TextInput
                style={styles.input}
                property="name"
                onChange={(e) => updateTelevision(tv.id, e.target.property, e.target.value)}
                placeholder="enter tv name"
                value={tv.name}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
  },
});
