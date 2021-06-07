import React, { createContext, useState } from 'react'
import { IMenuContext } from './IMenuContext'

export const MenuContext = createContext({} as IMenuContext)

function MenuProvider({ children }) {

  const [MenuActive, setMenuActive]: any = useState()

  return (
    <MenuContext.Provider value={{ MenuActive, setMenuActive }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider
