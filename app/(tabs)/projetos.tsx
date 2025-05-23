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

export default function Projetos() {
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

      {/* PROJETOS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROJETOS</Text>
        <Text style={styles.text}>
          Projetos desenvolvidos na Universidade Católica de Pernambuco que
          ajudaram a aprimorar as minhas habilidades:
        </Text>

        <View style={styles.project}>
          <Text style={styles.projectTitle}>
            • Workshop de Maratona Da Computação
          </Text>
          <Text style={styles.text}>
            Evento de duas semanas organizado pelos próprios alunos da maratona
            para alunos iniciantes (1º e 2º períodos) de Ciências da Computação.
            O workshop tratou desde conceitos básicos até algoritmos mais
            avançados, com aulas de cada integrante da equipe e competições
            entre os alunos participantes.
          </Text>
        </View>

        <View style={styles.project}>
          <Text style={styles.projectTitle}>• Apoio Local</Text>
          <Text style={styles.text}>
            Protótipo de aplicativo criado para reduzir o desperdício de
            alimentos, promovendo doações por meio de um mapa onde pessoas ou
            empresas podem sinalizar sobras disponíveis para resgate, ajudando
            também pessoas em situação de fome.
          </Text>
        </View>

        <View style={styles.project}>
          <Text style={styles.projectTitle}>
            • Biblioteca digital para alunos de Ciências da Computação
          </Text>
          <Text style={styles.text}>
            Protótipo desenvolvido para tornar a busca e acesso ao conhecimento
            mais fácil e direto. O objetivo era disponibilizar os principais
            livros para estudantes de ciências da computação.
          </Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://github.com/Dudubraga/Projeto-Biblioteca")
            }
          >
            <Text style={styles.link}>(clique aqui para ver o projeto!)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.project}>
          <Text style={styles.projectTitle}>• Hortinha inclusiva</Text>
          <Text style={styles.text}>
            Projeto desenvolvido para a cadeira de Robótica Inclusiva. Era um
            sistema que avisava, com base na umidade da planta, quando era hora
            de regar. O objetivo era ajudar pessoas com deficiência visual,
            idosos ou quem tem problema de memória a cuidar melhor das plantas.
          </Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://github.com/juliasvilar/Hortinha_Inclusiva"
              )
            }
          >
            <Text style={styles.link}>(clique aqui para ver o projeto!)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.project}>
          <Text style={styles.projectTitle}>
            • Quiz de ciências da computação
          </Text>
          <Text style={styles.text}>
            O projeto é um quiz voltado para alunos de Ciências da Computação,
            do 1º ao 5º período, com perguntas sobre os conteúdos das
            disciplinas. A ideia é usar a gamificação para tornar o aprendizado
            mais divertido e motivador, incentivando os alunos a estudarem e
            fixarem melhor o conhecimento de forma leve e interativa.
          </Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://projeto-web-mobile-seven.vercel.app/")
            }
          >
            <Text style={styles.link}>(clique aqui para ver o projeto!)</Text>
          </TouchableOpacity>
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
  project: {
    marginBottom: 16,
    alignItems: "center",
    width: "100%",
  },
  projectTitle: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 4,
    color: "#1f2937",
    textAlign: "center",
    width: "100%",
  },
  link: {
    color: "#2563eb",
    textDecorationLine: "underline",
    marginTop: 4,
    textAlign: "center",
  },
});
