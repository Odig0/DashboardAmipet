import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const BarChart = () => {
  const data = {
    labels: ['08h', '10h', '12h', '14h', '16h', '18h'],
    datasets: [
      {
        label: 'Ventas',
        data: [5, 12, 9, 17, 8, 6],
        backgroundColor: '#4bc0c0',
      }
    ],
  }

  return <Bar data={data} />
}

export default BarChart
