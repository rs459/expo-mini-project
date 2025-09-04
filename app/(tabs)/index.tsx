import { styles as s } from "@/App.styles";
import Profile from "@/component/Profile";
import { useRef, useState } from "react";
import {
  AccessibilityInfo,
  findNodeHandle,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [userProfile, setUserProfile] = useState({
    firstname: "Jean",
    lastname: "Brouille",
    exp: 10,
    image: "https://placehold.co/600x400.png",
  });

  const [isEditing, setIsEditing] = useState(false);

  const testRef = useRef(null);

  function setExperience(value: number): void {
    setUserProfile((prev) => ({ ...prev, exp: value }));
    AccessibilityInfo.announceForAccessibility(`Expérience : ${value} ans`);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={s.container}>
          <Text
            accessibilityRole="header"
            style={s.header}
            ref={testRef}
            accessible={true}
          >
            Profil
          </Text>
          <Profile
            isEditing={isEditing}
            profile={userProfile}
            setUserProfile={setUserProfile}
            setExperience={setExperience}
          />
          <TouchableOpacity
            onPress={() => {
              setIsEditing(!isEditing);
              if (testRef.current) {
                const reactTag = findNodeHandle(testRef.current);
                if (reactTag) {
                  AccessibilityInfo.setAccessibilityFocus(reactTag);
                }
              }
            }}
            accessibilityRole="button"
            accessibilityHint="Modifier l'état d'édition du profil"
            style={s.button}
          >
            <Text style={s.buttonText}>
              {isEditing ? "Terminer l'édition" : "Modifier le profil"}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
