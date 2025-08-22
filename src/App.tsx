import { RestaurantMenu } from './components/RestaurantMenu'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <RestaurantMenu />
    </LanguageProvider>
  )
}

export default App
