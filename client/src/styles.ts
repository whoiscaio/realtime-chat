import { styled } from '@stitches/react';

const Header = styled('header', {
  maxWidth: '1000px',
  margin: '30px auto',
  display: 'flex',
  alignItems: 'center',
  '& h1': {
    flex: 1,
  },
});

const ChatContainer = styled('div', {
  '& .chat': {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    '& div': {
      background: '#f6f7f4',
      borderRadius: '5px',
      margin: '10px 0 0',
      padding: '10px 20px',
      fontSize: '18px',
    },
    '& .received-message': {
      alignSelf: 'flex-start',
    },
    '& .sent-message': {
      alignSelf: 'flex-end',
      color: '#ffffff',
      background: '#2222ff',
    },
  },
  '& .actions': {
    maxWidth: '1000px',
    margin: '20px auto 0',
    borderTop: '1px solid #333333',
    paddingTop: '16px',
    '& div': {
      display: 'flex',
      marginBottom: '16px',
      '& input': {
        flex: 1,
      },
      '& button': {
        background: '#2222ff',
        border: '0',
        borderRadius: '5px',
        color: '#ffffff',
        fontSize: '18px',
        padding: '10px 20px',
        marginLeft: '16px',
      },
      '&:last-child button': {
        background: '#f6f7f4',
        color: '#333333',
      },
    },
  },
});

const LoginContainer = styled('div', {
  maxWidth: '300px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& input': {
    fontSize: '18px',
    marginBottom: '15px',
  },
  '& button': {
    background: '#2222ff',
    border: '0',
    borderRadius: '5px',
    color: '#ffffff',
    fontSize: '18px',
    width: '150px',
  },
});

export { Header, ChatContainer, LoginContainer };
