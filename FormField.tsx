/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

import {Controller} from 'react-hook-form';
import {
  Control,
  FieldErrorsImpl,
  RegisterOptions,
} from 'react-hook-form/dist/types';
import {FormData} from './App';

type NameTypes =
  | 'confirm_password'
  | 'email'
  | 'firstname'
  | 'lastname'
  | 'password'
  | 'phone_number';

type FormFieldProps = {
  name: NameTypes;
  placeholder: string;
  // children: JSX.Element | JSX.Element[];
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  control: Control<FormData, any>;
};

// const FormField: React.FC<FormFieldProps> = ({...props}) => {} ---> assigns a children we may not use
// function FormField({...props}: FormFieldProps) {} ---> better option, no need to worry about return type

function FormField({
  name,
  placeholder,
  rules,
  errors,
  control,
}: FormFieldProps): JSX.Element {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({field: {onChange, onBlur, value}}) => (
        <>
          <TextInput
            style={styles.textInputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={textValue => onChange(textValue)}
            value={value}
          />
          {errors?.[name] && (
            <Text style={styles.errorMsgStyle}>
              {errors?.[name]?.message?.toString()}
            </Text>
          )}
        </>
      )}
      name={name}
    />
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(109, 109, 109, .65)',
    height: 50,
    borderRadius: 25,
    paddingLeft: 25,
    marginTop: 25,
  },
  errorMsgStyle: {
    color: 'rgba(255,0,0,0.7)',
    paddingLeft: 10,
    marginTop: 4,
    fontSize: 10,
  },
});

export default FormField;
