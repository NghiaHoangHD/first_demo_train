import ReactDOM from 'react-dom'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import Reducer from './store/reducers/Reducer'
import rootSaga from './store/sagas/Sagas'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../src/ultis/history'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  Reducer,
  //   applyMiddleware(sagaMiddleware),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

const client = new QueryClient()
ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
    {/* </ConnectedRouter> */}
  </Provider>,
  document.getElementById('root')
)
