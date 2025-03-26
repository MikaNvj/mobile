import React from "react";
import { View, Image, FlatList } from "react-native";
import { Card, Text, Badge } from "react-native-paper";

const demandes = [
  {
    id: "1",
    materiel: "Ordinateur Portable",
    description: "Besoin d'un PC pour le projet",
    image: "https://via.placeholder.com/150",
    statut: "En attente",
  },
  {
    id: "2",
    materiel: "Projecteur",
    description: "Pour la présentation de lundi",
    image: "https://via.placeholder.com/150",
    statut: "Approuvé",
  },
  {
    id: "3",
    materiel: "Imprimante",
    description: "Impression des documents de réunion",
    image: "https://via.placeholder.com/150",
    statut: "Rejeté",
  },
  {
    id: "4",
    materiel: "Imprimante",
    description: "Impression des documents de réunion",
    image: "https://via.placeholder.com/150",
    statut: "Rejeté",
  },
  {
    id: "5",
    materiel: "Imprimante",
    description: "Impression des documents de réunion",
    image: "https://via.placeholder.com/150",
    statut: "Rejeté",
  },
];

const getBadgeColor = (statut: string) => {
  switch (statut) {
    case "En attente":
      return "#FBC02D"; // Jaune
    case "Approuvé":
      return "#4CAF50"; // Vert
    case "Rejeté":
      return "#F44336"; // Rouge
    default:
      return "#607D8B"; // Gris
  }
};

const ListeDemandes = () => {
  return (
    <View style={{ padding: 20, paddingTop: 50, flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", 
        marginBottom: 20, 
        color:"#1466b8" }}>Liste de vos demandes</Text>
      <FlatList
        data={demandes}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20, marginTop: 5 }}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 10, 
          borderRadius: 10, 
          elevation: 5,
          flex: 1,
          marginHorizontal: 5,
          maxWidth: "48%",
          }}>
            <Card.Cover source={{ uri: item.image }} style={{ height: 100 }} />
            <Card.Content>
              <Text variant="titleMedium" style={{ fontWeight: "bold", marginTop: 10, color:"#1466b8" }}>
                {item.materiel}
              </Text>
              <Text variant="bodyMedium" style={{ color: "#666", marginVertical: 5 }}>
                {item.description}
              </Text>
              <Badge
                style={{
                  backgroundColor: getBadgeColor(item.statut),
                  alignSelf: "flex-start",
                  paddingHorizontal: 10,
                  
                  borderRadius: 20,
                }}
              >
                {item.statut}
              </Badge>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

export default ListeDemandes;
