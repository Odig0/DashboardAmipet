import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = () => {
  const data = {
    labels: ['Medicamentos', 'Alimentos', 'Accesorios', 'Servicios'],
    datasets: [
      {
        data: [40, 30, 15, 15],
        backgroundColor: ['#ff9f40', '#36a2eb', '#ff6384', '#4bc0c0'],
      },
    ],
  }

  return <Pie data={data} />
}

export default PieChart
