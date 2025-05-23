import { Link } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Habilidades() {
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

      {/* HABILIDADES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <Text style={styles.intro}>
          Aqui estão algumas das principais ferramentas, linguagens e
          tecnologias com as quais já pude trabalhar e desenvolver projetos ao
          longo da minha trajetória acadêmica e pessoal:
        </Text>
        <View style={styles.bioContainer}>
          <View style={styles.bio}>
            <Text style={styles.text}>
              <Text style={styles.bold}>💻 Linguagens:</Text> Python, Java, C,
              C++
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>🌐 Web:</Text> HTML, CSS, JavaScript,
              React
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>🗄️ Banco de Dados:</Text> MySQL, SQLite
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>🛠️ Ferramentas:</Text> Git, GitHub,
              Figma
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>⚙️ Frameworks:</Text> Django, Next.js
            </Text>
          </View>
        </View>
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
    marginBottom: 18,
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
  bioContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 24,
    marginTop: 12,
    width: "100%",
  },
  bio: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});
