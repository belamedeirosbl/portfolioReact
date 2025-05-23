import { Link } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Navegação */}
      <View style={styles.nav}>
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

      {/* SOBRE MIM */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre Mim</Text>
        <View style={styles.bioContainer}>
          <Image
            source={require("../../assets/images/fotoCurriculo.png")}
            style={styles.profileImage}
          />

          <View style={styles.bio}>
            <Text style={styles.text}>
              Sou estudante de Ciência da Computação na Universidade Católica de
              Pernambuco, estou cursando agora o quinto período. Gosto muito de
              programar, de explorar novos algoritmos e sempre descobrir a
              melhor solução para cada problema! criei esse App para mostrar
              minhas habilidades que estão sendo desenvolvidas na cadeira de
              programação Web Mobile!
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
    flexWrap: "wrap", // permite quebrar linha
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 16,
    paddingHorizontal: 10,
    width: "100%",
    maxWidth: 700,
    gap: 0, // remova o gap se estiver usando margin nos links
  },
  navLink: {
    color: "#ffffff",
    fontSize: 18,
    marginVertical: 8,
    marginHorizontal: 10, // espaçamento lateral entre os links
    textAlign: "center",
    paddingHorizontal: 12, // reduzido para dar mais espaço
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "rgba(37, 99, 235, 0.15)", // leve destaque ao hover
    overflow: "hidden",
  },
  section: {
    alignItems: "center",
    marginBottom: 32,
    paddingVertical: 24, // aumentado
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 24, // aumentado
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    width: "100%",
    maxWidth: 700, // aumentado de 500 para 700
  },
  sectionTitle: {
    fontSize: 28, // aumentado de 24 para 28
    fontWeight: "600",
    color: "#111827",
    marginBottom: 16, // aumentado
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
    paddingBottom: 8, // aumentado
    textAlign: "center",
    width: "100%",
  },
  text: {
    fontSize: 18, // aumentado de 16 para 18
    color: "#374151",
    lineHeight: 28, // aumentado
    marginBottom: 12, // aumentado
    textAlign: "center",
    width: "100%",
  },
  bold: {
    fontWeight: "bold",
  },
  bioContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 24, // aumentado
    marginTop: 12, // aumentado
    width: "100%",
  },
  profileImage: {
    width: 160, // aumentado de 120 para 160
    height: 160, // aumentado de 120 para 160
    borderRadius: 16, // aumentado
    marginBottom: 16, // aumentado
  },
  bio: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});
