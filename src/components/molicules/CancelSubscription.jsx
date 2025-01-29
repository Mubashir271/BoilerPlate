import React from "react";
import {
  Modal,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Close } from "../../assets/images";
import DeleteSvg from "../../assets/icons/user/deleteSvg"; 
import { colors } from "../../config/colors";
import { mvs } from "../../config/metrices";
import RenewSvg from "../../assets/icons/user/renewSvg";

const CancelSubcription = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={onClose}>
            <Image source={Close} style={styles.image1} />
          </TouchableOpacity>

          <View style={styles.svgContainer}>
         <RenewSvg/>
          </View>

          <Text style={styles.text}>
            The subscription will be cancelled.
          </Text>
          <Text style={styles.text2}>
            Are you sure you want to permanently cancel your subscription?
          </Text>

          <View style={{ marginTop: 10, width: "100%", alignSelf: "center" }}>
      
            <TouchableOpacity
              style={styles.redButton}
              onPress={onClose} 
            >
              <Text style={styles.buttonText}>Cancel Subscription</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "90%",
    padding: 15,
    paddingVertical: 18,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  image1: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "black",
    fontWeight: "500",
  },
  text2: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "grey",
    fontWeight: "400",
  },
  svgContainer: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  redButton: {
    backgroundColor: colors.red1,
    padding: mvs(16),
    borderRadius: mvs(12),
    marginTop: mvs(16),
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: mvs(16),
    fontWeight: "bold",
  },
});

export { CancelSubcription };
