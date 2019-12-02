import { StyleSheet } from 'react-native';
import Colors from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 8,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    marginTop: 20,
    fontSize: 40,
    color: Colors.BLUE,
  },
});

export default styles;
