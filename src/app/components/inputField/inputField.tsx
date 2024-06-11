type InputFieldProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  style?: React.CSSProperties;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  isRequired = true,
  style,
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    required={isRequired}
    aria-required="true"
    className="mb-4 p-2 border border-gray-300 rounded"
    value={value}
    onChange={onChange}
    style={style}
  />
);
export default InputField;
