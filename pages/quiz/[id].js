/* eslint-disable linebreak-style */
import React from 'react';

export default function QuizDaGaleraPage(props) {
  return (
    <div>
      DESAFIO GARAY
      <pre style={{ color: 'black' }}>{JSON.stringify(props, null, 4)}</pre>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log('Infors que o Next give pra nois', context.query);
  const dbExterno = await fetch(
    'https://aluraquiz-css.omariosouto.vercel.app/api/db'
  )
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then((respostaConvertidaEmJson) => respostaConvertidaEmJson)
    .catch((err) => console.error(err));
  console.log('dbExterno', dbExterno);
  return {
    props: {
      dbExterno,
    },
  };
}
