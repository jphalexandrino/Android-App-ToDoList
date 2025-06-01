import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  boxTop: {
    width: "100%",
    height: height * 0.28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },

  logo: {
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: "contain",
  },

  welcomeText: {
    fontSize: 24,
    fontWeight: "600",
    color: themes.colors.primary,
    marginTop: 10,
  },

  boxMid: {
    width: "100%",
    marginBottom: 30,
  },

  titleInput: {
    marginLeft: 8,
    marginBottom: 6,
    fontSize: 14,
    fontWeight: "500",
    color: themes.colors.text,
  },

  boxInput: {
    width: "100%",
    height: 54,
    backgroundColor: themes.colors.secondary,
    borderRadius: 12, // menos arredondado
    borderWidth: 1,
    borderColor: themes.colors.tertiary,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 18,
  },

  input: {
    flex: 1,
    height: "100%",
    color: themes.colors.text,
    paddingLeft: 10,
    fontSize: 16,
  },

  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 25,
  },

  forgotPasswordText: {
    color: themes.colors.tertiary,
    fontSize: 13,
    fontWeight: "500",
  },

  boxBottom: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  loginButton: {
    width: "100%",
    height: 54,
    backgroundColor: themes.colors.primary,
    borderRadius: 8, // mais retangular
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  loginButtonText: {
    color: themes.colors.white,
    fontSize: 16,
    fontWeight: "600",
    width: 100,
    textAlign: "center",
  },

  registerText: {
    color: themes.colors.text,
    fontSize: 14,
  },

  registerLink: {
    color: themes.colors.primary,
    fontWeight: "600",
  },
  inputPlaceHolder: {
    flex: 1,
    color: "#000", // Cor do texto digitado (preto, por exemplo)
    paddingHorizontal: 16,
    fontSize: 16,
  },
});
