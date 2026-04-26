import { useFieldContext } from "@/app/lib/form";

export const TextField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  const field = useFieldContext<string>();
  console.log("txtfield", field);
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        {/* <label>{label}</label> */}
        <input
          name={field.name}
          value={field.state.value}
          placeholder={placeholder}
          onBlur={field.handleBlur}
          type="text"
          className="bg-neutral-50 rounded-md text-neutral-800 font-medium text-sm px-2 py-2 border border-neutral-500 focus:outline-primary w-full"
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
