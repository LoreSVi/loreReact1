import { Button } from "@mui/material";
import { useCount } from "../hooks/useCount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);
  const [isAdd, setIsAdd] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div style={{ marginBottom: "5px", display: "flex", gap: "20px" }}>
        {!isAdd && (
          <>
            <Button variant="contained" color="secondary" onClick={decrement}>
              -
            </Button>
            <h2>{count}</h2>
            <Button variant="contained" color="secondary" onClick={increment}>
              +
            </Button>
          </>
        )}

        {isAdd ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate("/carrito");
            }}
          >
            Ir al Carrito
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              onAdd(count);
              setIsAdd(true);
            }}
          >
            Agregar al carrito
          </Button>
        )}
      </div>
    </>
  );
};
