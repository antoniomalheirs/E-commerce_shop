import React from "react";
import TextField from "@mui/material/TextField";

const HomeAdm = ({ field1Data, field2Data, field3Data, field4Data }) => {
  return (
    <div className="py-4 flex w-65 h-65 justify-center items-center">
      <div className="flex flex-row">
        <div className="mx-2">
          <TextField
            label={field2Data}
            variant="outlined"
            value={field1Data}
            disabled
            className="my-2"
          />
        </div>
        <div className="mx-2">
          <TextField
            label={field4Data}
            variant="outlined"
            value={field3Data}
            disabled
            className="my-2"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAdm;
