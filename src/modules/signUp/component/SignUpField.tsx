import { AccountPurpleBtn } from '@/common/component/button/AccountPurpleBtn';
import AccountInput from '@/common/component/input/AccountInput';
import { BigTitle } from '@/common/component/textStyle/BigTitle';
import Router from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpField = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(e.target.value);
  };

  return (
    <Container>
      <BigTitle>SIGN Up</BigTitle>
      <AccountInput
        value={id}
        label={'Id'}
        placeholder={'Enter your Id...'}
        onChange={onChangeId}
      />
      <AccountInput
        value={name}
        label={'Name'}
        placeholder={'Enter your Name...'}
        onChange={onChangeName}
      />
      <AccountInput
        value={email}
        label={'Email'}
        placeholder={'Enter your Email...'}
        onChange={onChangeEmail}
      />
      <AccountInput
        value={phoneNumber}
        label={'PhoneNumber'}
        placeholder={'Enter your PhoneNumber...'}
        onChange={onChangePhoneNumber}
      />
      <AccountInput
        value={password}
        label={'Password'}
        placeholder={'Enter your password...'}
        onChange={onChangePassword}
        password
      />
      <AccountInput
        value={checkPassword}
        label={'Check Password'}
        placeholder={'Enter your password...'}
        onChange={onChangeCheckPassword}
        password
      />
      <AccountPurpleBtn
        onClick={() => {
          Router.push('/signIn');
        }}
      >
        SIGN UP
      </AccountPurpleBtn>
    </Container>
  );
};

export default SignUpField;

const Container = styled.div`
  width: 400px;
`;
