import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount, resetCount } from '../store/actions';

export default function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      <Head>
        <title>Counter</title>
        <meta name="description" content="Redux state test page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <div style={{ display: 'flex', gap: '1em' }}>
        <button type="button" onClick={() => dispatch(incrementCount())}>
          +1
        </button>
        <button type="button" onClick={() => dispatch(decrementCount())}>
          -1
        </button>
        <button type="button" onClick={() => dispatch(resetCount())}>
          Reset
        </button>
      </div>
    </div>
  );
}
