import { Link } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Sobre() {
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

      {/* SOBRE O APP */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Tecnologias e Ferramentas do App
        </Text>
        <Text style={styles.text}>
          Este aplicativo foi desenvolvido utilizando principalmente recursos
          básicos do React Native, como componentes funcionais, navegação entre
          telas, estilização com StyleSheet e manipulação de estados com hooks.
        </Text>
        <Text style={styles.text}>
          Toda a estrutura das telas está organizada na pasta{" "}
          <Text style={styles.bold}>app</Text>, aproveitando o sistema de rotas
          do Expo Router para facilitar a navegação.
        </Text>
        <Text style={styles.text}>
          Para a interface, utilizei componentes como{" "}
          <Text style={styles.bold}>View</Text>,{" "}
          <Text style={styles.bold}>Text</Text>,{" "}
          <Text style={styles.bold}>ScrollView</Text>,{" "}
          <Text style={styles.bold}>Image</Text> e{" "}
          <Text style={styles.bold}>TouchableOpacity</Text>, além do{" "}
          <Text style={styles.bold}>StyleSheet</Text> para manter o visual
          consistente.
        </Text>
        <Text style={styles.text}>
          O código foi escrito em <Text style={styles.bold}>TypeScript</Text>{" "}
          para maior segurança e organização, e o projeto foi mantido simples e
          fácil de entender, focando nos recursos essenciais do React Native.
        </Text>
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
  text: {
    fontSize: 18,
    color: "#374151",
    lineHeight: 28,
    marginBottom: 12,
    textAlign: "center",
    width: "100%",
  },
  bold: {
    fontWeight: "bold",
  },
});
