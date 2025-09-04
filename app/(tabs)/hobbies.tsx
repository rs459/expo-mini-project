import { styles as s } from "@/App.styles";
import HobbyList from "@/component/HobbyList";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Hobbies() {
  const [inputValue, setInputValue] = useState("");
  const [hobbyList, setHobbyList] = useState([
    "Métro",
    "Boulot",
    "Dodo",
    "Lecture",
    "Jeux vidéo",
    "Cuisine",
    "Jeux de société",
    "Musique",
    "Sport",
    "Randonnée",
    "Voyages",
    "Photographie",
    "Cinéma",
    "Séries",
    "Théâtre",
    "Danse",
    "Peinture",
    "Dessin",
    "Jardinage",
  ]);

  function addHobby() {
    if (inputValue === "") return;
    setHobbyList([...hobbyList, inputValue]);
    setInputValue("");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={s.container}>
            <View>
              <Text style={s.header} accessibilityRole="header">
                Hobbies
              </Text>
            </View>
            <TextInput
              style={s.input}
              value={inputValue}
              onChangeText={setInputValue}
              accessibilityLabel="Nouveau hobby"
            />
            <TouchableOpacity
              style={s.button}
              onPress={addHobby}
              accessibilityRole="button"
              accessibilityLabel="Ajouter un hobby"
            >
              <Text style={s.buttonText}>Ajouter un hobby</Text>
            </TouchableOpacity>
            {/* <HobbyList hobbies={hobbyList} setHobbies={setHobbyList} /> */}
            <HobbyList hobbies={hobbyList} setHobbies={setHobbyList} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
