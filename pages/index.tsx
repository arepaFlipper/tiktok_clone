import type { NextPage } from 'next';
import axios from 'axios';

const Home: NextPage = () => {
  return (
    <div className='text-3xl font-bold underline'>
      Hello world
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await axios.get(`http://localhost:3000/api/post`);
  console.log(`🍟%cindex.tsx:14 - response`, 'font-weight:bold; background:#44bb00;color:#fff;'); //DELETEME
  console.log(response.data.name); // DELETEME

  return {
    props: {}
  }
}

export default Home;
