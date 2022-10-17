import { BoardButton, BoardDialog } from "@dashboard/board-ui";
import { Box } from "@mui/material";
import { useCallback, useState } from "react";

import type { Document } from "@dashboard/board-api";
import type { ValueFormatterParams } from "ag-grid-community";

const Status = ({ value }: { value: string }) => {
  const className = `glow-${value.toLowerCase()}`;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className={className} />
      <span>{value}</span>
    </div>
  );
};

const Action = ({ row }: { row: Document }) => {
  const [open, changeOpenState] = useState(false);
  const handleOpen = useCallback(() => changeOpenState(!open), [open]);
  // @ts-expect-error not defined in document, added dynamicaly
  const { action, ...rest } = row;

  return (
    <>
      <BoardButton onClick={handleOpen} variant="outlined" label="GET INFO" />
      <BoardDialog open={open} onClose={handleOpen} title="Info">
        <Box width={300} display="flex" flexDirection="column" p={3}>
          {Object.entries(rest).map(([key, value], index) => {
            if (key === "status") {
              return <Status key={index} value={value} />;
            }

            return (
              <p key={index}>
                {key}: {value}
              </p>
            );
          })}
        </Box>
      </BoardDialog>
    </>
  );
};

export const Cell = (params: ValueFormatterParams<Document>) => {
  switch (params.colDef.field) {
    case "status":
      return <Status value={params.value} />;
    case "action":
      return <Action row={params.data!} />;
    default:
      return params.value;
  }
};
