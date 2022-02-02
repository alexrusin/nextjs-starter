import axios from 'axios';
import Head from 'next/head';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuote } from '../store/actions';

export default function Quote() {
  const quoteOfTheDay = useSelector((state) => state.quoteOfTheDay);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuote(axios));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Head>
        <title>Quote of the day</title>
        <meta name="description" content="Redux thunk test page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Quote of the Day</h1>
        <p>{quoteOfTheDay.quote ?? 'Loading quote of the day....'}</p>
        <p>{quoteOfTheDay.author}</p>
      </div>
    </div>
  );
}
