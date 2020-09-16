import React, { useState } from 'react'

export const myContext = React.createContext();

const Provider = props => {
  const [sideDrawerToggle, setSideDrawerToggle] = useState(false)

  return (
    <myContext.Provider value={{
      sideDrawerToggle,
      toggleSideDrawer: () => setSideDrawerToggle(!sideDrawerToggle)
    }}>
      {props.children}
    </myContext.Provider>
  )
};

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
);