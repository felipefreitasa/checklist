import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components/native';
import defaultTheme from './src/theme/defaultTheme';
import { useFonts, Inter_400Regular, Inter_700Bold, } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar 
        style='light'
        backgroundColor='transparent'
        translucent
      />

      <Home/>
    </ThemeProvider>
  );
}
