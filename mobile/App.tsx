import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="font-bold text-gray-50">Hey! 🚀</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
