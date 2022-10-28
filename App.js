import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CAU1 from './components/CAU1';
import CAU2 from './components/CAU2';
import CAU3 from './components/CAU3';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CAU1/> */}
      {/* <CAU2/> */}
      <CAU3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
