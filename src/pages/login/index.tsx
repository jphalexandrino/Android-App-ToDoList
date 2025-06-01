import React from "react";
import {
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import { themes } from "../../global/themes";

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Barra de status com ícones brancos */}
      <StatusBar
        barStyle="light-content"
        backgroundColor={themes.colors.background}
      />

      {/* Topo com logo e saudação */}
      <View style={styles.boxTop}>
        <Image
          source={Logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>
          Bem-vindo de volta!
        </Text>
      </View>

      {/* Área dos inputs */}
      <View style={styles.boxMid}>
        {/* Email */}
        <Text style={styles.titleInput}>
          ENDEREÇO DE E-MAIL
        </Text>
        <View style={styles.boxInput}>
          <TextInput
            style={styles.inputPlaceHolder}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <MaterialIcons
            name="email"
            size={20}
            color={themes.colors.tertiary}
          />
        </View>

        {/* Senha */}
        <Text style={styles.titleInput}>SENHA</Text>
        <View style={styles.boxInput}>
          <TextInput
            style={styles.inputPlaceHolder}
            placeholder="Digite sua senha"
            placeholderTextColor="#aaa"
            secureTextEntry
          />
          <MaterialIcons
            name="lock"
            size={20}
            color={themes.colors.tertiary}
          />
        </View>

        {/* Esqueceu a senha */}
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Botão de login e footer */}
      <View style={styles.boxBottom}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Não tem uma conta?{" "}
          <Text style={styles.registerLink}>
            Registre-se
          </Text>
        </Text>
      </View>
    </View>
  );
}
