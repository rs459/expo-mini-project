import { styles as s } from "@/App.styles";
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
    <View style={{ width: "80%" }}>
      <View>
        <Text>Prénom :</Text>
        <TextInput
          style={s.input}
          value={profile.firstname}
          onChangeText={(text) =>
            setUserProfile({ ...profile, firstname: text })
          }
          accessibilityLabel="Prénom"
        />
      </View>
      <View>
        <Text>Nom :</Text>
        <TextInput
          style={s.input}
          value={profile.lastname}
          onChangeText={(text) =>
            setUserProfile({ ...profile, lastname: text })
          }
          accessibilityLabel="test"
        />
      </View>
      <View>
        <Text>Expérience :</Text>
        <TextInput
          style={s.input}
          value={profile.exp.toString()}
          onChangeText={(text) =>
            setUserProfile({ ...profile, exp: parseInt(text) || 0 })
          }
          accessibilityLabel="Expérience"
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text>Image :</Text>
        <TextInput
          style={s.input}
          value={profile.image}
          onChangeText={(text) => setUserProfile({ ...profile, image: text })}
          accessibilityLabel="Image"
        />
      </View>
    </View>
  ) : (
    <View
      accessibilityLabel="Informations du profil"
      style={{ width: "80%", alignItems: "center" }}
    >
      <View>
        <Text
          style={[s.text, s.pad1]}
          accessibilityLabel={`Prénom : ${profile.firstname}`}
        >
          {profile.firstname}
        </Text>
        <Text
          style={[s.text, s.pad1]}
          accessibilityLabel={`Nom : ${profile.lastname}`}
        >
          {profile.lastname}
        </Text>
        <Image
          source={{
            uri: profile.image,
          }}
          style={s.image}
          accessibilityLabel="Photo de profil"
        />
      </View>
      <View>
        <Text
          style={s.text}
          accessibilityLabel={`Expérience : ${profile.exp} ans`}
        >
          Expérience : {profile.exp} ans
        </Text>
      </View>
      <View>
        <ExpMeter setExperience={setExperience} exp={profile.exp} />
      </View>
    </View>
  );
}
