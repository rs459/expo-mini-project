import { Alert, Text, TouchableOpacity, View } from "react-native";

export interface HobbyListProps {
  hobbies: string[];
  setHobbies: (value: string[]) => void;
}

export default function HobbyList({ hobbies, setHobbies }: HobbyListProps) {
  const removeHobby = (hobbyToRemove: string) => {
    Alert.alert(
      "Confirmer la suppression",
      `Êtes-vous sûr de vouloir supprimer "${hobbyToRemove}" ?`,
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Supprimer",
          onPress: () => {
            const newList = hobbies.filter((h) => h !== hobbyToRemove);
            setHobbies(newList);
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View
      className="p-2 border border-gray-200 rounded-lg bg-gray-50"
      accessibilityRole="list"
    >
      {hobbies.length === 0 ? (
        <Text className="text-center text-gray-500 my-4">
          Aucun hobby pour le moment.
        </Text>
      ) : (
        hobbies.map((hobby, index) => (
          <View
            key={index}
            className="w-full flex-row justify-between items-center my-2 p-4 rounded-lg bg-white shadow-md"
          >
            <Text className="text-base text-gray-700 font-semibold">
              {hobby}
            </Text>
            <TouchableOpacity
              onPress={() => removeHobby(hobby)}
              accessibilityRole="button"
              accessibilityLabel={`Supprimer le hobby ${hobby}`}
              className="p-2 ml-4 bg-red-500 rounded-xl"
            >
              <Text className="text-white text-lg font-bold">X</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </View>
  );
}
