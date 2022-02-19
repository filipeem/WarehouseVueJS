import { mount } from '@cypress/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import WarehouseTable from "@/components/WarehouseTable.vue";

Vue.use(Vuetify)

describe('WarehouseList', () => {
  let vuetify
  beforeEach(() => {
      vuetify = new Vuetify()
  })

  it('Lists all warehouses', () => {
        
    mount(WarehouseTable, {
      
    })

    cy.contains('div', 'Lista de Galpões').should('be.visible');
    cy.get('table').should('have.text', 'NomeCódigoCep')
  })
})
