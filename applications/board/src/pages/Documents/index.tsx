import { BoardButton, BoardSearchInput } from "@dashboard/board-ui";
import Search from "@mui/icons-material/Search";
import { Box, Divider } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import csvDownload from "json-to-csv-export";
import { useMemo } from "react";

import type { Document } from "@dashboard/board-api";
import type { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import ManaosImg from "../../assets/pictures/manaos-logo.png";
import { Cell } from "../../components/Cell";
import { useDocuments } from "../../hooks";
import { useSearchAtom } from "../../hooks/state/useSearch";
import { Portal } from "../Portal";

export const Documents = () => {
  const { searchValue, onSearchChange } = useSearchAtom();
  const { data, status } = useDocuments();
  const columnDefs = [
    "fileId",
    "fileName",
    "uploadedBy",
    "uploadedDate",
    "status",
    "action",
  ].map<ColDef<Document>>((item) => ({
    field: item,
    headerName: item === "action" ? "" : item,
    hide: item === "fileId",
    cellRenderer: Cell,
  }));
  const defaultColDef = {
    sortable: true,
  };
  const onSearchInput = (event: any) => {
    event.preventDefault();
    onSearchChange(event.target.value);
  };

  const maybeFiltered = useMemo(() => {
    if (searchValue?.trim()) {
      return data?.entities?.filter((item) =>
        item.uploadedBy.includes(searchValue)
      );
    }

    return data?.entities;
  }, [searchValue, data]);

  const dataToConvert = {
    data: data?.entities ?? [],
    filename: "documents",
    delimiter: ",",
    headers: Object.keys(data?.entities ?? {}),
  };

  return (
    <>
      <Portal elementName="board-layout-toolbar">
        <BoardButton
          style={{
            position: "absolute",
            top: 15,
            right: 20,
          }}
          disabled={status === "loading"}
          onClick={() => csvDownload(dataToConvert)}
          color="secondary"
          variant="contained"
          label="Export to csv"
        />
      </Portal>
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          alignItems="center"
          height={150}
          marginBottom={2}
          p={2}
        >
          <img width={80} src={ManaosImg} />
        </Box>
        <Divider />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={2}
        >
          <Box>
            <Box marginTop={2} marginBottom={2} width={300}>
              <BoardSearchInput
                fullWidth
                onChange={onSearchInput}
                value={searchValue}
                style={{
                  borderRadius: 30,
                }}
                inputProps={{
                  style: {
                    borderRadius: 30,
                  },
                }}
                disabled={status === "loading"}
                iconEnd={<Search />}
                label="Search"
                variant="filled"
              />
            </Box>
            <Box className="ag-theme-alpine" width={1000} height={250}>
              <AgGridReact
                rowData={
                  maybeFiltered?.map((item) => ({
                    ...item,
                    action: "",
                  })) ?? null
                }
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                animateRows={true}
                loadingOverlayComponent={() =>
                  status === "loading" ? <h1>Loading...</h1> : undefined
                }
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
