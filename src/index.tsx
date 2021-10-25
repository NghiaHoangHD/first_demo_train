import ReactDOM from 'react-dom'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import Reducer from './store/reducers/Reducer'
import rootSaga from './store/sagas/Sagas'
import { Provider } from 'react-redux'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(Reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const client = new QueryClient()
ReactDOM.render(
  // <QueryClientProvider
  //   client = {client}
  // >

  //   <App />

  // </QueryClientProvider>
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root')
)
