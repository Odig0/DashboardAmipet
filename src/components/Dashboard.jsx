import Navbar from './Navbar'
import Card from './Card'
import PieChart from './PieChart'
import BarChart from './Barchart'

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="px-6 py-4 bg-gray-100 min-h-screen">
        {/* Encabezado */}
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Panel General</h1>

        {/* Métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card title="Productos disponibles">
            <p className="text-2xl font-bold text-center text-gray-700">186</p>
          </Card>
          <Card title="Productos vendidos hoy">
            <p className="text-2xl font-bold text-center text-emerald-600">47</p>
          </Card>
          <Card title="Servicios agendados">
            <p className="text-2xl font-bold text-center text-sky-600">12</p>
          </Card>
          <Card title="Ganancias del mes">
            <p className="text-2xl font-bold text-center text-purple-700">Bs. 12.430</p>
          </Card>
        </div>

        {/* Gráficos lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card title="Distribución de inversión">
            <PieChart />
          </Card>
          <Card title="Ventas por hora">
            <BarChart />
          </Card>
        </div>
      </main>
    </>
  )
}
