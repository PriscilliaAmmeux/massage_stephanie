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
    
    value={value}
    onChange={onChange}
    style={style}
  />
);
export default InputField;
