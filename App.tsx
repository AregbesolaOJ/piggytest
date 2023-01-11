import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useForm} from 'react-hook-form';
import FormField from './FormField';
import Button from './Button';

export type FormData = {
  confirm_password: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  phone_number: string | undefined;
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<FormData>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={styles.containerStyle}>
        <Text style={styles.textStyle}>Register Form</Text>
        <View style={styles.formStyle}>
          <FormField
            control={control}
            placeholder="Firstname"
            errors={errors}
            rules={{required: 'Firstname is required'}}
            name="firstname"
          />

          <FormField
            control={control}
            placeholder="Lastname"
            errors={errors}
            rules={{required: 'Lastname is required'}}
            name="lastname"
          />

          <FormField
            control={control}
            placeholder="Email Address"
            errors={errors}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9.-]$/,
                message: 'Invalid email',
              },
            }}
            name="email"
          />

          <FormField
            control={control}
            placeholder="Phone Number"
            errors={errors}
            rules={{
              required: 'Phone Number is required',
              pattern: {
                value: /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/,
                message: 'Invalid phone number',
              },
            }}
            name="phone_number"
          />

          <FormField
            control={control}
            placeholder="Password"
            inputProps={{
              secureTextEntry: true,
            }}
            errors={errors}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be atleast 8 charecters',
              },
              maxLength: {
                value: 32,
                message: 'Password must not have more than 32 charecters',
              },
              pattern: {
                value:
                  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*#!@$%^&]).{8,32}$/,
                message:
                  'Password must contain atleast 1 uppercase, 1 lowercase, 1 special character(!@#$%^&*) and 1 digit',
              },
            }}
            name="password"
          />

          <FormField
            control={control}
            placeholder="Confirm Password"
            errors={errors}
            inputProps={{
              secureTextEntry: true,
            }}
            rules={{
              required: 'Confirm Password is required',
              validate: value =>
                value === watch('password') || 'Passwords does not match',
            }}
            name="confirm_password"
          />

          <Button onPress={handleSubmit(onSubmit)}>
            <Text style={{color: '#FFFFFF', fontSize: 16}}>Sign Up</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  containerStyle: {
    marginTop: 50,
  },
  textStyle: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  formStyle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default App;
