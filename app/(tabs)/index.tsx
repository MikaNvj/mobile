import React, { useState } from "react";
import { View, TextInput, Button, Image, Alert, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

const FormulaireMateriel = () => {
  const [materiel, setMateriel] = useState("");
  const [description, setDescription] = useState("");
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission refusée", "Vous devez autoriser l'accès à la caméra.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      base64: true,
      quality: 0.7,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImageBase64(result.assets[0].base64 || null);
    }
  };

  return (
    <View style={{ padding: 20 ,paddingTop: 50}}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Bienvenue sur l'accueil !</Text>
      <TextInput
        placeholder="Matériel"
        value={materiel}
        onChangeText={setMateriel}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
        multiline
      />
      {imageBase64 && (
        <Image
          source={{ uri: `data:image/jpeg;base64,${imageBase64}` }}
          style={{ width: 200, height: 200, marginTop: 10, alignSelf: "center" }}
        />
      )}
      <Button title="Prendre une photo" onPress={handleTakePhoto} />

      
    </View>
  );
};

export default FormulaireMateriel;
