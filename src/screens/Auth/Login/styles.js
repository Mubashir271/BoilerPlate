import {StyleSheet} from 'react-native';
import {colors} from '../../../util/color';
import {mvs} from '../../../util/metrices';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: mvs(30),
  },
  passwordContainer: {
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    right: mvs(15),
    top: mvs(15),
  },
  container: {
    flex: 1,
    paddingHorizontal: mvs(30),
    backgroundColor: colors.black,
  },
  text: {
    marginVertical: mvs(10),
  },
  button: {
    backgroundColor: colors.primary,
    padding: mvs(15),
    borderRadius: mvs(8),
    alignItems: 'center',
    marginTop: mvs(10),
  },
  buttonText: {
    color: colors.white,
    fontSize: mvs(16),
  },
  input: {
    marginRight: mvs(10),
    paddingLeft: mvs(10),
    borderWidth: mvs(1),
    borderColor: colors.gray1,
    borderRadius: mvs(5),
    height: mvs(50),
    width: '100%',
  },
  inputError: {
    borderColor: colors.red,
  },
  errorText: {
    color: colors.red,
    fontSize: mvs(12),
    marginTop: mvs(5),
  },
  eyeIcon: {
    position: 'absolute',
    right: mvs(10),
    top: mvs(12),
    zIndex: 1,
  },
  registerText: {
    color: colors.white,
    marginTop: mvs(10),
    textAlign: 'center',
  },
  registerLink: {
    fontWeight: 'bold',
    marginBottom: mvs(20),
    fontSize: mvs(18),
    fontFamily: 'DMSans-Bold',
  },
});

export default styles;
