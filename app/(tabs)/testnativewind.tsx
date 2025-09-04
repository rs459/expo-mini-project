import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  { id: "1", title: "Élément de liste 1" },
  { id: "2", title: "Élément de liste 2" },
  { id: "3", title: "Élément de liste 3" },
  { id: "4", title: "Élément de liste 4" },
  { id: "5", title: "Élément de liste 5" },
];

export default function AllComponentsA11yDemo() {
  const [isSwitchEnabled, setSwitchEnabled] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    // Ne pas assigner de rôle "listitem" ici
    <View
      className="p-4 my-2 bg-white rounded-lg shadow"
      // Laissez le rôle par défaut (ou n'en mettez pas)
      accessibilityLabel={`Élément de liste : ${item.title}`}
    >
      <Text className="text-gray-800">{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView
        className="p-4"
        accessibilityLabel="Contenu de la page" // Libellé pour le lecteur d'écran
      >
        {/*
         * En-tête sémantique
         * Un Text simple ne sera pas lu comme un en-tête par un lecteur d'écran.
         * On utilise accessibilityRole="header".
         */}
        <Text
          className="text-4xl font-extrabold text-center my-6 text-gray-900"
          accessibilityRole="header"
        >
          Démonstration de composants
        </Text>

        {/* Section TextInput & Switch */}
        <View className="mb-8">
          <Text className="text-2xl font-bold mb-4 text-gray-700">
            Inputs & Controls
          </Text>
          <TextInput
            className="h-12 border border-gray-300 rounded-lg p-3 mb-4 text-base focus:border-blue-500"
            placeholder="Saisissez du texte..."
            onChangeText={setTextInputValue}
            value={textInputValue}
            // `accessibilityLabel` est essentiel pour les champs de saisie
            accessibilityLabel="Champ de saisie de texte"
          />
          <View
            className="flex-row items-center justify-between p-4 bg-white rounded-lg shadow"
            // Le "group" est utile ici pour lier le label et le switch
            accessibilityRole="adjustable"
            accessibilityLabel={`Interrupteur d'état, actuellement ${isSwitchEnabled ? "activé" : "désactivé"}`}
          >
            <Text className="text-lg font-semibold text-gray-700">
              Activer/Désactiver
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isSwitchEnabled ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={() =>
                setSwitchEnabled((previousState) => !previousState)
              }
              value={isSwitchEnabled}
              // Le libellé est mis sur le View parent pour le groupe, donc ici on peut enlever le label sur le Switch lui-même
              accessible={true}
            />
          </View>
        </View>

        {/* Section Pressable & ActivityIndicator */}
        <View className="mb-8">
          <Text className="text-2xl font-bold mb-4 text-gray-700">
            Actions & État
          </Text>
          <Pressable
            className="bg-purple-600 py-3 px-6 rounded-full items-center justify-center shadow-md active:bg-purple-700"
            onPress={handleLoad}
            accessibilityRole="button" // Rôle sémantique "bouton"
            accessibilityLabel={
              isLoading ? "Chargement en cours" : "Simuler un chargement"
            } // Libellé dynamique
          >
            {isLoading ? (
              <ActivityIndicator
                color="#FFFFFF"
                accessibilityRole="progressbar"
                accessibilityLabel="Indicateur de chargement"
              />
            ) : (
              <Text className="text-white font-bold text-lg">
                Simuler un chargement
              </Text>
            )}
          </Pressable>
        </View>

        {/* Section FlatList */}
        <View className="mb-8">
          <Text className="text-2xl font-bold mb-4 text-gray-700">
            Liste optimisée
          </Text>
          {/*
           * FlatList ne supporte pas directement les rôles de liste
           * On peut utiliser un conteneur pour donner le rôle
           */}
          <View
            className="p-2 border border-gray-200 rounded-lg bg-gray-50"
            accessibilityRole="list"
          >
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              className="p-2 border border-gray-200 rounded-lg bg-gray-50"
            />
          </View>
        </View>

        {/* Section View & Text */}
        <View className="mb-8">
          <Text className="text-2xl font-bold mb-4 text-gray-700">
            Conteneurs & Texte
          </Text>
          <View
            className="p-6 bg-green-200 rounded-lg shadow-inner border-l-4 border-green-500"
            accessible={true}
            accessibilityLabel="Bloc de contenu vert"
          >
            <Text className="text-green-800 text-lg">
              Ceci est un conteneur (`View`) stylisé avec NativeWind pour
              montrer son utilisation comme un bloc de contenu.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
