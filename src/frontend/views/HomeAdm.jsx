import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const HomeAdm = ({ field1Data, field2Data, field3Data, field4Data }) => {
  return (
    <div
      className="py-4 flex justify-center items-center"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="flex flex-row">
        <div className="mx-2">
          <TextField
            label={field2Data}
            variant="outlined"
            value={field1Data}
            disabled
            fullWidth
            className="my-2"
            InputProps={{ style: { backgroundColor: "#ffffff" } }}
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
            InputProps={{ style: { backgroundColor: "#ffffff" } }}
          />
        </div>
        <div className="mx-2">
          <a href="/shop/oferta">
            <Button
              variant="contained"
              color="primary"
              className="bg-yellow-500 hover:bg-yellow-600"
            >
              Adicionar Oferta
            </Button>
          </a>
        </div>
        <div className="mx-2">
          <a href="/shop/business">
            <Button
              variant="contained"
              color="primary"
              className="bg-yellow-500 hover:bg-yellow-600"
            >
              Adicionar Loja
            </Button>
          </a>
        </div>
        <div className="mx-2">
          <a href="/shop/gerenciar">
            <Button
              variant="contained"
              color="primary"
              className="bg-yellow-500 hover:bg-yellow-600"
            >
              Gerenciar Loja
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeAdm;
