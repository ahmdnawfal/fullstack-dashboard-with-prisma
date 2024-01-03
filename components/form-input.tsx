import * as z from 'zod';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { UseFormReturn } from 'react-hook-form';

type PropsFormInput = {
  form: UseFormReturn<any, undefined>;
  name: string;
  label: string;
  placeholder: string;
};

export default function FormInput({
  form,
  label,
  name,
  placeholder,
}: PropsFormInput) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder={placeholder} type={name} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
