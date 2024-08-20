import { MenuItem } from './components/MenuItem';
import { menuItems } from './data/db';
import { useOrder } from './hooks/useOrder';

function App() {

  const { addItem } = useOrder();

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
        <div>
          <h2>Consumo</h2>
        </div>
      </main>

    </>
  )
}

export default App
