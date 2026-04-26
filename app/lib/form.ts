import {
  createFormHook,
  createFormHookContexts,
} from "@tanstack/react-form-nextjs";
import { TextField } from "../_components/form/TextField";
import { PasswordField } from "../_components/form/PasswordField";
import { SubmitButton } from "../_components/form/SubmitButton";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm, withForm } = createFormHook({
  formContext,
  fieldContext,
  fieldComponents: {
    TextField,
    PasswordField,
  },
  formComponents: { SubmitButton },
});
