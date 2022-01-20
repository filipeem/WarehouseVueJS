import { mount } from '@cypress/vue'
import WarehouseCard from '@/components/WarehouseCard.vue'
import WarehouseList from '@/views/WarehouseList.vue'

describe('WarehouseList', () => {
  it('Lists all warehouses', () => {
        
    mount(WarehouseList, {
      
    })
    mount(WarehouseCard, {
      
    })
    
    cy.contains('h1', 'Galpões Cadastrados').should('be.visible');
    cy.get('p').should('have.text', 'Código: CEP: ')
  })
})