import Profile from "@/component/Profile";
import { useRef, useState } from "react";
import {
  AccessibilityInfo,
  findNodeHandle,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [userProfile, setUserProfile] = useState({
    firstname: "Jean",
    lastname: "Brouille",
    exp: 10,
    image: "https://placehold.co/600x400.png",
  });

  const [isEditing, setIsEditing] = useState(false);
  const headerRef = useRef(null);

  function setExperience(value: number): void {
    setUserProfile((prev) => ({ ...prev, exp: value }));
    AccessibilityInfo.announceForAccessibility(
      `Expérience mise à jour à ${value} ans.`
    );
  }

  const handleEditPress = () => {
    setIsEditing((prev) => !prev);
    if (headerRef.current) {
      const reactTag = findNodeHandle(headerRef.current);
      if (reactTag) {
        AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 items-center p-4">
      <View className="w-full flex-row justify-between items-center mb-6">
        <Text
          accessibilityRole="header"
          className="text-4xl font-extrabold text-gray-900"
          ref={headerRef}
        >
          Profil
        </Text>
        <TouchableOpacity
          onPress={handleEditPress}
          accessibilityRole="button"
          accessibilityHint="Basculer entre les modes de visualisation et d'édition du profil"
          className="bg-blue-600 px-6 py-3 rounded-lg shadow-md active:bg-blue-700"
        >
          <Text className="text-white font-bold">
            {isEditing ? "Terminer" : "Modifier"}
          </Text>
        </TouchableOpacity>
      </View>
      <Profile
        isEditing={isEditing}
        profile={userProfile}
        setUserProfile={setUserProfile}
        setExperience={setExperience}
      />
    </SafeAreaView>
  );
}
