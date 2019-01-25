import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      firstPage: true,
      locales: ['en', 'fr'],
      colorPaletteIndex: 0,
      colorPalettes: [
        {
          label: 'dark',
          colors: {
            backgroundColor: '2b3434',
            headColor: 'e7e7e0',
            domainLabelsColor: 'fffcf7',
            domainLabelsOpacity: 0.5,
            cadranLabelsColor: 'b7b5b1',
            cadranLabelsOpacity: 0.2,
            arccadranColor: 'FFFFFF',
            arccadranOpacity: 0.04,
            backgroundcomposantBox: '283434',
            colorTextComposantBox: 'FFF',
            opacityTextComposantBox: 0.6,
            backgroundFiltersBox: '252b2b',
            filterstitleColor: 'e7e7e0'
          }
        }
      ]
    },
    actions: {
    },
    mutations: {
      SET_FIRST_PAGE (state, firstPage) {
        state.firstPage = firstPage || false
      }
    },
    getters: {
      firstPage (state) {
        return state.firstPage
      }
    }
  })
}

export default createStore
