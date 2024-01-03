import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

type PropsOptions = {
  value: string;
  label: string;
};

type PropsFormSelect = {
  form: UseFormReturn<any, undefined>;
  name: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
  options: PropsOptions[];
};

export default function FormSelect({
  form,
  name,
  label,
  placeholder,
  options,
  defaultValue,
}: PropsFormSelect) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={defaultValue}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
