import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const HomeAdm = ({ field1Data, field2Data, field3Data, field4Data }) => {
  return (
    <div className="py-4 bg-red-600 text-white">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex flex-row">
          <div className="mx-2">
            <TextField
              label={field2Data}
              variant="outlined"
              value={field1Data}
              disabled
              fullWidth
              className="my-2"
              InputProps={{ style: { backgroundColor: "#ffffff", color: "#000000" } }}
              InputLabelProps={{ style: { color: "#000000" } }}
            />
          </div>
          <div className="mx-2">
            <TextField
              label={field4Data}
              variant="outlined"
              value={field3Data}
              disabled
              fullWidth
              className="my-2"
              InputProps={{ style: { backgroundColor: "#ffffff", color: "#000000" } }}
              InputLabelProps={{ style: { color: "#000000" } }}
            />
          </div>
          <div className="mx-2">
            <a href="/shop/oferta">
              <Button
                variant="contained"
                style={{ backgroundColor: "#FFD700" }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                Adicionar Oferta
              </Button>
            </a>
          </div>
          <div className="mx-2">
            <a href="/shop/business">
              <Button
                variant="contained"
                style={{ backgroundColor: "#FFD700" }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                Adicionar Loja
              </Button>
            </a>
          </div>
          <div className="mx-2">
            <a href="/shop/gerenciar">
              <Button
                variant="contained"
                style={{ backgroundColor: "#FFD700" }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                Gerenciar Loja
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdm;
