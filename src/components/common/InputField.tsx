import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  options?: string[] | null;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error?: string;
  isDark: boolean;
  readOnly?: boolean;
  showOtherInput?: boolean;
  otherValue?: string;
  onOtherChange?: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  name, 
  type = 'text', 
  required = false, 
  options = null,
  value,
  onChange,
  error,
  isDark,
  readOnly = false,
  showOtherInput = false,
  otherValue = '',
  onOtherChange
}) => (
  <div>
    <label className={`block text-sm font-medium mb-1 transition-colors ${
      isDark ? 'text-gray-200' : 'text-gray-700'
    }`}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {options ? (
      <div className="space-y-2">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-3 py-2 border rounded-md transition-colors focus:ring-2 focus:ring-offset-2 ${
            error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
              : isDark 
                ? 'bg-gray-800 border-gray-600 text-white focus:border-white focus:ring-white' 
                : 'bg-white border-gray-300 text-black focus:border-black focus:ring-black'
          }`}
        >
          <option value="">Select {label}</option>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        {showOtherInput && value === 'Other' && (
          <input
            type="text"
            placeholder="Please specify..."
            value={otherValue}
            onChange={(e) => onOtherChange?.(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md transition-colors focus:ring-2 focus:ring-offset-2 ${
              isDark 
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-white focus:ring-white' 
                : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-black focus:ring-black'
            }`}
            required={value === 'Other'}
          />
        )}
      </div>
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`w-full px-3 py-2 border rounded-md transition-colors focus:ring-2 focus:ring-offset-2 ${
          error 
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
            : isDark 
              ? 'bg-gray-800 border-gray-600 text-white focus:border-white focus:ring-white' 
              : 'bg-white border-gray-300 text-black focus:border-black focus:ring-black'
        } ${readOnly ? 'bg-gray-100 dark:bg-gray-700 cursor-not-allowed' : ''}`}
        min={type === 'number' ? '0' : undefined}
      />
    )}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default InputField;