import { useFormContext } from "@/app/lib/form";

export const SubmitButton = ({ label }: { label: string }) => {
  const { Subscribe, state } = useFormContext();
  console.log("Submit button state", state);
  return (
    <Subscribe
      selector={(state) => [state.canSubmit, state.isSubmitting]}
      children={([canSubmit, isSubmitting]) => (
        <button
          type="submit"
          disabled={!canSubmit}
          className="rounded-md disabled:cursor-not-allowed disabled:bg-primary/80 cursor-pointer bg-primary px-2 py-2 text-center text-neutral-100 font-semibold"
        >
          {isSubmitting ? "Submitting..." : label}
        </button>
      )}
    />
  );
};
