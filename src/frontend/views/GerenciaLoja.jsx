import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const GerenciaLoja = ({ field1Data }) => {
  return (
    <div className="py-4 bg-red-600 text-white">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-4">
          <Card className="bg-gray-800 text-white" elevation={3}>
            <CardContent>
              <a href="/shop/oferta" className="block mb-4">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#FFD700" }}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                >
                  Adicionar Oferta
                </Button>
              </a>
              <p className="text-center text-sm">
                Adicione uma nova oferta à sua loja.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 text-white" elevation={3}>
            <CardContent>
              <a href="/shop/business" className="block mb-4">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#FFD700" }}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                >
                  Adicionar Loja
                </Button>
              </a>
              <p className="text-center text-sm">
                Adicione uma nova loja ao seu sistema.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GerenciaLoja;
