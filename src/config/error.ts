import { OptionsObject } from "notistack";
import { Collapse } from "@mui/material";

export const SNACKBAR_OPTIONS: OptionsObject = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center",
  },
  variant: "error",
  TransitionComponent: Collapse,
};

const GENERIC_ERROR = "An unknown error occurred";

export const toErrorMessage = (potentialError: unknown): string => {
  const error = potentialError as Error;
  return error.message ?? GENERIC_ERROR;
};
