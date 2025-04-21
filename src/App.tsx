
import '@/assets/global.scss'
import { useAppQuery } from './hooks/useAppQuery'
import { useAppRouter } from './hooks/useAppRouter'

// Create a new router instance
function App() {
  const {AppQueryProvider} = useAppQuery();
  const {AppRouterProvider} = useAppRouter();
  return (
    <AppQueryProvider>
       <AppRouterProvider />
    </AppQueryProvider>
  )
}

export default App
