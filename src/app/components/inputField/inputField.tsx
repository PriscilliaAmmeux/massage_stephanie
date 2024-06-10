type InputFieldProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    required
    aria-required="true"
    className="mb-4 p-2 border border-gray-300 rounded"
    value={value}
    onChange={onChange}
  />
);
export default InputField;
