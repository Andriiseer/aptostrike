import React from "react";
import { SnackbarProvider } from "notistack";

const NotistackSnackbarProvider = ({ children }) => {
    return (
        <SnackbarProvider
            maxSnack={ 3 }
            anchorOrigin={{
                vertical: "left",
                horizontal: "bottom"
            }}
            css="overflow-wrap: break-word; word-break: break-word;"
        >
            { children }
        </SnackbarProvider>
    );
};

export default NotistackSnackbarProvider;
