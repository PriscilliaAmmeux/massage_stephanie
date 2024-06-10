type TextAreaFieldProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => (
  <textarea
    name={name}
    placeholder={placeholder}
    required
    aria-required="true"
    className="mb-4 p-2 border border-gray-300 rounded h-32"
    value={value}
    onChange={onChange}
  />
);
export default TextAreaField;
