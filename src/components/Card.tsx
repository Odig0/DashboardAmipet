export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-md p-3">
      {title && <h2 className="text-sm font-medium text-gray-600 mb-1">{title}</h2>}
      {children}
    </div>
  )
}
