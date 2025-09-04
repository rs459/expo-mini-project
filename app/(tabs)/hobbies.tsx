import HobbyList from "@/component/HobbyList";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView>
        <View className="p-4">
          <Text
            className="text-4xl font-extrabold text-center my-6 text-gray-900"
            accessibilityRole="header"
          >
            Mes Hobbies
          </Text>
          <View className="flex-row mb-6">
            <TextInput
              className="flex-1 h-12 border border-gray-300 rounded-lg p-3 text-base focus:border-blue-500 mr-2"
              placeholder="Ajouter un nouveau hobby..."
              value={inputValue}
              onChangeText={setInputValue}
              accessibilityLabel="Nouveau hobby"
            />
            <TouchableOpacity
              className="bg-blue-600 px-6 rounded-lg items-center justify-center shadow-md active:bg-blue-700"
              onPress={addHobby}
              accessibilityRole="button"
              accessibilityLabel="Ajouter le hobby"
            >
              <Text className="text-white font-bold">Ajouter</Text>
            </TouchableOpacity>
          </View>
          <HobbyList hobbies={hobbyList} setHobbies={setHobbyList} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
