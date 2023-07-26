import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import { styled } from 'styled-components'
import { rootReducer } from './store/reducers'

const App = () => {
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

  return (
    <Provider store={store}>
      <GlobalContainer>

      </GlobalContainer>
    </Provider>
  )
}

export default App

const GlobalContainer = styled.div`
  margin:0;
  padding:0;
  font-family: 'Be Vietnam Pro', sans-serif;
`