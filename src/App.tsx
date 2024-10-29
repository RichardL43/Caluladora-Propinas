import { useReducer } from 'react';
import { MenuItems } from './components/MenuItem';
import { OrderContents } from './components/OrderContents';
import { OrderTotal } from './components/OrderTotal';
import { TipPercentage } from './components/TipPercentage';
import { menuItems } from './data/db';
import { initialState, orderReducer } from './reducer/order-reducer';

function App() {

  const [state, dispatch] = useReducer(orderReducer, initialState)
  return (
    <>
      <header className="bg-purple-700 py-5">
        <h1 className="text-center text-white font-mono text-4xl">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid grid-cols-2">
        <div className='p-5'>
          <h2 className='text-4xl font-black'>Menu</h2>
          <div className=' mt-10 space-y-3'>
            {menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                dispatch={dispatch} //!add-item
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state?.order?.length > 0 ? (
            <>
              <OrderContents
                order={state.order}
                dispatch={dispatch} //!remove
              />

              <TipPercentage
                dispatch={dispatch}
                tip={state.tip}
              />

              <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={dispatch} //!place
              />
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}

        </div>
      </main>

    </>
  )
}

export default App
