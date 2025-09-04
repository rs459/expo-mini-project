import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },

  text: {
    fontSize: 16,
    marginBottom: 8,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },

  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
    width: "100%",
  },

  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },

  pad1: {
    padding: 8,
  },
});

export default styles;
