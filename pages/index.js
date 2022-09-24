import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home({ data }) {
  // const [photos, setPhotos] = useState([])

  // const func = () => {
  //   return fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
  // }
  // useEffect(  () => {
  //   func()
  //   .then(response => response.json())
  //   .then(data => setPhotos(data))
  // }, []);
  return (
    <div >

      <Head>
        <title>Next App</title>
        
      </Head>
      
      
      
      <input type='file' onChange={(e) => console.log(e.files)} />



      <Link href={'/posts'}><a>Posts</a></Link> <br/>
      Список фоток
      <ul>
        {
          data?.map(photo => (
            <li key={photo.id}>{photo.title}</li>
          ))
        }
      </ul>
    </div>
  )
}


export async function getStaticProps() {
  let response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
  let data = await response.json()
  console.log(data)
 
  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}
