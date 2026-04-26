import { useFieldContext } from "@/app/lib/form";

export const PasswordField = ({ label }: { label: string }) => {
  const field = useFieldContext<string>();
  console.log("field", field);
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        {/* <label>{label}</label> */}
        <input
          name={field.name}
          value={field.state.value}
          placeholder="Enter your password"
          onBlur={field.handleBlur}
          type="password"
          className="bg-neutral-50 text-neutral-900 placeholder:text-gray-600 font-medium text-sm px-2 py-2 rounded-md outline-2 outline-neutral-600 focus:outline-primary focus:outline-2 w-full"
          onChange={(e) => field.handleChange(e.target.value)}
        />
      </div>
      {field.state.meta.errors ? (
        <em className="text-xs text-red-400">
          {field.state.meta.errors.map((err) => err.message).join(", ")}
        </em>
      ) : null}
    </div>
  );
};
