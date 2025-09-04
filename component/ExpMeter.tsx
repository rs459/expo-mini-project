import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

interface ExpMeterProps {
  setExperience: (value: number) => void;
  exp: number;
}

export function ExpMeter({ setExperience, exp }: ExpMeterProps) {
  return (
    <View className="flex-row justify-center items-center my-8">
      <TouchableOpacity
        onPress={() => setExperience(exp + 1)}
        accessibilityRole="button"
        accessibilityLabel="Augmenter l'expérience d'un an"
        className="bg-green-500 p-4 rounded-full shadow-md active:bg-green-600"
      >
        <FontAwesome name="plus" size={16} color="white" />
      </TouchableOpacity>
      <View className="w-10" />
      <TouchableOpacity
        onPress={() => setExperience(exp > 0 ? exp - 1 : 0)}
        accessibilityRole="button"
        accessibilityLabel="Réduire l'expérience d'un an"
        className="bg-red-500 p-4 rounded-full shadow-md active:bg-red-600"
      >
        <FontAwesome name="minus" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
}
