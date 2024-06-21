import type { NextPageWithLayout } from 'pages/_app';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head'
import { useState, useEffect } from "react";
import { media, vw, vwTb, rem } from 'utils/style-helper';
import { css } from "@emotion/react";
import Header from 'components/common/header';
import Footer from 'components/common/footer';
import { Event } from '@prisma/client';


export const getStaticProps: GetStaticProps = async(context) => {
  const response = "";
  return {
    props: {
      contents: response,
    }
  }
}

const Index: NextPageWithLayout = (props: any) => {
  const { contents } = props;
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const getEvent = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`);
      const event = await response.json();
      setEvents(event);
    }
    getEvent();
  }, []);

  const changeCheckBox = async(item: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${item.id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: item.completed }),
      }
    )
    const updateEvent = await response.json();
    setEvents(
      events.map((event) => {
        if (event.id === updateEvent.id) {
          return updateEvent;
        }
        return event;
      })
    )
  }

  const deleteEvent = async(item: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${item.id}`,
      {
        method: 'DELETE',
      }
    )
    const deleteEvent = await response.json();
    setEvents(events.filter((event) => event.id !== deleteEvent.id))
  }

  const addEvent = async(e: any) => {
    e.preventDefault();
    if (!inputValue) {
      alert('イベント名を入力してください');
      return;
    };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: inputValue }),
      }
    )
    const newEvent = await response.json();
    setEvents([...events, newEvent]);
    setInputValue(null);
  }

  return (
    <>
      <Head>
        <title>イベント一覧</title>
        <meta name="description" content="イベントページのディスクリプション" />
      </Head>
      <main>
        <h1>イベント一覧</h1>
        <Link href="/">トップページへ</Link>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <input
                type='checkbox'
                checked={event.completed}
                onChange={() => changeCheckBox(event)}
              />
              <p>{event.title}</p>
              <button 
                onClick={() => deleteEvent(event)}
              >
                削除
              </button>
            </li>
          ))}
        </ul>
        <form
          onSubmit={addEvent}
        >
          <input
            type='text'
            value={inputValue || ''}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='イベント名を入力してください'
          />
          <br />
          <button type='submit'>追加</button>
        </form>
      </main>
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  )
}

const fig = css`
  ${media.pc} {
    width: 300px;
    margin: 30px auto;
  }
  ${media.sp} {
    width: ${vw(300)};
    margin: ${vw(30)} auto;
  }
  ${media.tb} {
    width: ${vwTb(300)};
    margin: ${vwTb(30)} auto;
  }
`

export default Index
