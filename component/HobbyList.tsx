import { styles as s } from "@/App.styles";
import { Text, TouchableOpacity, View } from "react-native";

export interface HobbyListProps {
  hobbies: string[];
  setHobbies: (value: string[]) => void;
}

export default function HobbyList({
  hobbies,
  setHobbies,
}: {
  hobbies: string[];
  setHobbies: (value: string[]) => void;
}) {
  return (
    <View>
      <View accessibilityRole="list" style={{ margin: 16 }}>
        {hobbies.map((hobby, index) => (
          <View
            key={index}
            role="listitem"
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 8,
              borderRadius: 8,
              backgroundColor: "#f4f4f4ff",
              padding: 8,
            }}
          >
            <Text>{hobby}</Text>
            <TouchableOpacity
              style={s.button}
              onPress={() => {
                setHobbies(hobbies.filter((h) => h !== hobby));
              }}
            >
              <Text
                style={{ color: "red", fontSize: 18 }}
                accessibilityLabel={`Supprimer le hobby ${hobby}`}
              >
                X
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
