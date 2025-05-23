import { Link } from "expo-router";
import React from "react";
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Contato() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Navegação */}
      <View style={styles.nav}>
        <Link href="/" style={styles.navLink}>
          Home
        </Link>
        <Link href="/projetos" style={styles.navLink}>
          Projetos
        </Link>
        <Link href="/exeprienciaAcademica" style={styles.navLink}>
          Experiencia Academica
        </Link>
        <Link href="/habilidades" style={styles.navLink}>
          Habilidades
        </Link>
        <Link href="/contato" style={styles.navLink}>
          Contato
        </Link>
        <Link href="/jogo" style={styles.navLink}>
          Jogo da Senha
        </Link>
        <Link href="/sobre" style={styles.navLink}>
          Sobre
        </Link>
      </View>

      {/* CONTATO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contato</Text>
        <Text style={styles.intro}>
          Estes são meus principais meios de contato. Fique à vontade para me
          chamar em qualquer um deles!
        </Text>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => Linking.openURL("https://github.com/belamedeirosbl")}
        >
          <Text style={styles.contactButtonText}>🐙 GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/isabela-medeiros-belo-lopes-0766b629a/"
            )
          }
        >
          <Text style={styles.contactButtonText}>💼 LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => Linking.openURL("mailto:belamedeirosbl@gmail.com")}
        >
          <Text style={styles.contactButtonText}>
            📧 belamedeirosbl@gmail.com
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f9fafb",
    paddingHorizontal: 16,
    paddingVertical: 24,
    minHeight: "100%",
  },
  nav: {
    backgroundColor: "#1f2937",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 16,
    paddingHorizontal: 10,
    width: "100%",
    maxWidth: 700,
    gap: 0,
  },
  navLink: {
    color: "#ffffff",
    fontSize: 18,
    marginVertical: 8,
    marginHorizontal: 10,
    textAlign: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "rgba(37, 99, 235, 0.15)",
    overflow: "hidden",
  },
  section: {
    alignItems: "center",
    marginBottom: 32,
    paddingVertical: 24,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    width: "100%",
    maxWidth: 700,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
    paddingBottom: 8,
    textAlign: "center",
    width: "100%",
  },
  intro: {
    fontSize: 17,
    color: "#374151",
    marginBottom: 24,
    textAlign: "center",
    width: "100%",
  },
  contactButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginVertical: 8,
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    shadowColor: "#2563eb",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  contactButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
