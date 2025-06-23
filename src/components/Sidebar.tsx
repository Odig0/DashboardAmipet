const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-[#1e1b4b] text-white p-6 space-y-6 shadow-lg z-10">
      <h1 className="text-3xl font-bold mb-10">AmiPet</h1>
      <nav className="space-y-4">
        <NavItem label="Panel" />
        <NavItem label="Inventario" />
        <NavItem label="Ventas" />
        <NavItem label="Servicios" />
        <NavItem label="Configuración" />
      </nav>
    </aside>
  )
}

const NavItem = ({ label }) => (
  <div className="text-white hover:text-yellow-400 cursor-pointer text-lg">{label}</div>
)

export default Sidebar
