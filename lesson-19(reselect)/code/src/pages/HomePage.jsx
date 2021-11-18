import AuthForm from '../components/AuthForm/AuthForm';

const Home = ({ title }) => {
  console.log('hello', title);
  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          color: 'black',
          paddingTop: '100px',
        }}>
        Welcome to {title}!!!
      </h1>
      <AuthForm />
    </>
  );
};

export default Home;
