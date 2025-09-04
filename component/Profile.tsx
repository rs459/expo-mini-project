import { Image, Text, TextInput, View } from "react-native";
import { ExpMeter } from "./ExpMeter";

export interface ProfileData {
  firstname: string;
  lastname: string;
  exp: number;
  image: string;
}

export interface ProfileProps {
  profile: ProfileData;
  isEditing: boolean;
  setUserProfile: (value: ProfileData) => void;
  setExperience: (value: number) => void;
}

export default function Profile({
  isEditing,
  profile,
  setUserProfile,
  setExperience,
}: ProfileProps) {
  return isEditing ? (
    <View
      className="w-full p-4 bg-white rounded-lg shadow-lg"
      accessibilityLabel="Formulaire d'édition de profil"
    >
      <View className="mb-4">
        <Text className="text-gray-700 font-semibold mb-1">Prénom :</Text>
        <TextInput
          className="h-12 border border-gray-300 rounded-lg p-3 text-base focus:border-blue-500"
          value={profile.firstname}
          onChangeText={(text) =>
            setUserProfile({ ...profile, firstname: text })
          }
          accessibilityLabel="Champ de saisie du prénom"
        />
      </View>
      <View className="mb-4">
        <Text className="text-gray-700 font-semibold mb-1">Nom :</Text>
        <TextInput
          className="h-12 border border-gray-300 rounded-lg p-3 text-base focus:border-blue-500"
          value={profile.lastname}
          onChangeText={(text) =>
            setUserProfile({ ...profile, lastname: text })
          }
          accessibilityLabel="Champ de saisie du nom"
        />
      </View>
      <View className="mb-4">
        <Text className="text-gray-700 font-semibold mb-1">Expérience :</Text>
        <TextInput
          className="h-12 border border-gray-300 rounded-lg p-3 text-base focus:border-blue-500"
          value={profile.exp.toString()}
          onChangeText={(text) =>
            setUserProfile({ ...profile, exp: parseInt(text) || 0 })
          }
          accessibilityLabel="Champ de saisie de l'expérience en années"
          keyboardType="numeric"
        />
      </View>
      <View className="mb-4">
        <Text className="text-gray-700 font-semibold mb-1">Image (URL) :</Text>
        <TextInput
          className="h-12 border border-gray-300 rounded-lg p-3 text-base focus:border-blue-500"
          value={profile.image}
          onChangeText={(text) => setUserProfile({ ...profile, image: text })}
          accessibilityLabel="Champ de saisie de l'URL de l'image"
        />
      </View>
    </View>
  ) : (
    <View
      accessibilityLabel="Informations du profil de Jean Brouille"
      className="w-full items-center p-6 bg-white rounded-lg shadow-lg"
    >
      <View className="items-center mb-6">
        <Image
          source={{ uri: profile.image }}
          className="w-32 h-32 rounded-full mb-4"
          accessibilityLabel="Photo de profil"
        />
        <Text
          className="text-3xl font-bold text-gray-900 mb-1"
          accessibilityRole="header"
        >
          {profile.firstname} {profile.lastname}
        </Text>
        <Text
          className="text-lg text-gray-600"
          accessibilityLabel={`Expérience : ${profile.exp} ans`}
        >
          Expérience : {profile.exp} ans
        </Text>
      </View>
      <ExpMeter setExperience={setExperience} exp={profile.exp} />
    </View>
  );
}
