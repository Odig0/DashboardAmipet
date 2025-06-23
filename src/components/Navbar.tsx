const Navbar = () => {
  return (
    <header className="bg-white shadow-sm px-6 py-3 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-xl font-bold text-gray-800">AmiPet</h1>
      <nav className="flex gap-6 text-sm text-gray-600 font-medium">
        <a className="hover:text-blue-500 cursor-pointer">Panel</a>
        <a className="hover:text-blue-500 cursor-pointer">Inventario</a>
        <a className="hover:text-blue-500 cursor-pointer">Ventas</a>
        <a className="hover:text-blue-500 cursor-pointer">Servicios</a>
        <a className="hover:text-blue-500 cursor-pointer">Configuración</a>
      </nav>
    </header>
  )
}

export default Navbar
