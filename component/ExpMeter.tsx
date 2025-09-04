import { styles as s } from "@/App.styles";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

interface ExpMeterProps {
  setExperience: (value: number) => void;
  exp: number;
}

export function ExpMeter({ setExperience, exp }: ExpMeterProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 32,
        gap: 32,
      }}
    >
      <TouchableOpacity
        onPress={() => setExperience(exp + 1)}
        accessibilityRole="button"
        accessibilityLabel="Augmenter l'expérience d'un an"
        style={s.button}
      >
        <FontAwesome name="plus" size={16} color={"white"} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setExperience(exp > 0 ? exp - 1 : 0)}
        accessibilityRole="button"
        accessibilityLabel="Réduire l'expérience d'un an"
        style={s.button}
      >
        <FontAwesome name="minus" size={16} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}
