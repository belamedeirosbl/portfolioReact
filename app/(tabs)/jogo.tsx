import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type FeedbackItem = {
  guess: string;
  bulls: number;
  cows: number;
};

export default function JogoSenha() {
  const [secretNumber, setSecretNumber] = useState<string>(
    generateSecretNumber()
  );
  const [guess, setGuess] = useState<string>("");
  const [feedback, setFeedback] = useState<FeedbackItem[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  function generateSecretNumber(): string {
    const digits: number[] = [];
    while (digits.length < 4) {
      const randomDigit = Math.floor(Math.random() * 10);
      if (!digits.includes(randomDigit)) {
        digits.push(randomDigit);
      }
    }
    return digits.join("");
  }

  function handleGuess() {
    if (guess.length !== 4 || new Set(guess).size !== 4) {
      Alert.alert("Erro", "Digite um número de 4 dígitos únicos.");
      return;
    }

    if (guess === secretNumber) {
      Alert.alert(
        "Parabéns!",
        `Você acertou o número secreto ${secretNumber}!`,
        [
          {
            text: "OK",
            onPress: resetGame,
          },
        ]
      );
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (guess[i] === secretNumber[i]) {
        bulls++;
      } else if (secretNumber.includes(guess[i])) {
        cows++;
      }
    }

    setFeedback([{ guess, bulls, cows }, ...feedback]);
    setGuess("");
  }

  function resetGame() {
    setSecretNumber(generateSecretNumber());
    setGuess("");
    setFeedback([]);
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#f9fafb" }}>
      <ScrollView contentContainerStyle={styles.pageContainer}>
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
        <View style={styles.section}>
          <Text style={styles.title}>Jogo Touros e Vacas</Text>
          <Text style={styles.subtitle}>
            Tente adivinhar o número secreto de 4 dígitos únicos.
          </Text>
          <TextInput
            style={styles.input}
            value={guess}
            onChangeText={setGuess}
            maxLength={4}
            placeholder="Digite sua tentativa"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button} onPress={handleGuess}>
            <Text style={styles.buttonText}>Adivinhar</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={resetGame}>
              <Text style={styles.buttonText}>Reiniciar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.buttonText}>Mostrar Resposta</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.title, { fontSize: 18, marginTop: 20 }]}>
            Tentativas
          </Text>
          <FlatList
            data={feedback}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text>{item.guess}</Text>
                <Text>
                  {item.bulls} Touros, {item.cows} Vacas
                </Text>
              </View>
            )}
            scrollEnabled={false}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Número Secreto</Text>
              <Text style={styles.modalText}>{secretNumber}</Text>
              <TouchableOpacity
                style={[styles.button, styles.secondaryButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f9fafb",
    paddingHorizontal: 16,
    paddingVertical: 24,
    minHeight: "100%",
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: "#1f2937",
    width: "100%",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#4b5563",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    padding: 14,
    fontSize: 18,
    marginBottom: 16,
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: 300,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minWidth: 140,
  },
  secondaryButton: {
    backgroundColor: "#2563eb",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginBottom: 20,
    width: "100%",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#f3f4f6",
    borderRadius: 10,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    width: "100%",
    maxWidth: 400,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
    color: "#111827",
  },
  modalText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: 20,
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
});
