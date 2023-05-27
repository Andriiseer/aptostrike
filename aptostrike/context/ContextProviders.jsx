import React from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import SelectedServerProvider from "./SelectedServerProvider";
import ContractServersProvider from "./ContractServersProvider";
import NotistackSnackbarProvider from "./NotistackSnackbarProvider";
import { AptosProvider } from "../store/AptosStore";

const ContextProviders = ({ children }) => {
    return (
        <AptosProvider>
            <ReactQueryProvider>
                <SelectedServerProvider>
                    <ContractServersProvider>
                        <NotistackSnackbarProvider>
                            {children}
                        </NotistackSnackbarProvider>
                    </ContractServersProvider>
                </SelectedServerProvider>
            </ReactQueryProvider>
        </AptosProvider>
    );
};

export default ContextProviders;
