import { MenuItem } from './components/MenuItem';
import { OrderContents } from './components/OrderContents';
import { menuItems } from './data/db';
import { useOrder } from './hooks/useOrder';

function App() {

  const { addItem, order, removeItem } = useOrder();

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
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents
          order={order} 
          removeItem={removeItem}
          />
        </div>
      </main>

    </>
  )
}

export default App
