import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { PlusCircle, PawPrint, User, Package, AlertTriangle } from "lucide-react";


const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Título del Dashboard */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Panel de Control - AmiPet</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Agregar Producto
        </Button>
      </div>

      {/* Estadísticas generales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex items-center gap-4">
            <Package />
            <CardTitle>Productos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">128</p>
            <p className="text-sm text-muted-foreground">Cargados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <User />
            <CardTitle>Usuarios</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">452</p>
            <p className="text-sm text-muted-foreground">Registrados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <PawPrint />
            <CardTitle>Mascotas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">312</p>
            <p className="text-sm text-muted-foreground">En sistema</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center gap-4">
            <AlertTriangle />
            <CardTitle>Reportes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">9</p>
            <p className="text-sm text-muted-foreground">Mascotas perdidas</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabla de productos */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Últimos Productos Cargados</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-2">Nombre</th>
                <th className="text-left p-2">Categoría</th>
                <th className="text-left p-2">Precio</th>
                <th className="text-left p-2">Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Croquetas Premium</td>
                <td className="p-2">Alimento</td>
                <td className="p-2">Bs. 85</td>
                <td className="p-2">25 unidades</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Collar con GPS</td>
                <td className="p-2">Accesorios</td>
                <td className="p-2">Bs. 230</td>
                <td className="p-2">8 unidades</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Juguete Mordedor</td>
                <td className="p-2">Juguetes</td>
                <td className="p-2">Bs. 40</td>
                <td className="p-2">35 unidades</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
