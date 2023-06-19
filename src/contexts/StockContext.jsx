import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const StockContext = createContext({})

StockContextProvider.propTypes = {
  children: PropTypes.node
}

export function StockContextProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (item) => {
    setItems(current => [item, ...current])
  }

  const getItem = (itemId) => {
    return items.find(i => i.id === itemId)
  }

  const updateItem = (itemId, newAttributes) => {
    setItems(current => {
      const itemIndex = current.findIndex(i => i.id === itemId)
      const updatedItems = [...current]
      Object.assign(updatedItems[itemIndex], newAttributes, { updatedAt: new Date() })
      return updatedItems
    })
  }

  const deleteItem = (itemId) => {
    setItems(current => current.filter(item => item.id !== itemId))
  }

  const stock = {
    items,
    addItem,
    getItem,
    updateItem,
    deleteItem
  }

  return (
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  )
}
