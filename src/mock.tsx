import Mock from 'mockjs';

const domain_client = '/api_client/';

Mock.mock(domain_client + 'login', () => {
  const result = {
    code: 200,
    message: 'OK',
    data: {
      loginUid: 10000,
      nickname: ' S1mon',
      token: 'yyds2025',
    },
  };
  return result;
});
