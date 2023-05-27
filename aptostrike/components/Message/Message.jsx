import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export function Message({ text, shouldDisplayProgress }) {
    return (
        <div className="message">
            {shouldDisplayProgress && (
                <CircularProgress size="1em" sx={{ color: "#9D7C14" }} />
            )}
            <span>{text}</span>
        </div>
    );
}
