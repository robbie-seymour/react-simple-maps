/* global google */
import logo from './logo.svg';
import ReactMapGl from 'react-map-gl';
import './App.css';
import Map5 from './Map5';
// import { typedjson, useTypedLoaderData } from 'remix-typedjson'
// import type { LoaderArgs } from '@remix-run/node'
// // https://medium.com/scalereal/integration-of-google-maps-with-react-part-2-947f04945910
// // Can take the route code and turn it into 
// // Make loader function, iframe is black box to react (like a lot of things)

// export const loader = async ({ request }: LoaderArgs) => {

//   return typedjson({  })
// }

// src will need new url each time and we use map3.js to feed it that new url each time
// Feature that occurs when you click is to send new api request
function App() {
  const getGeneratedPageURL = ({ html, css, js }) => {
    const getBlobURL = (code, type) => {
      const blob = new Blob([code], { type })
      return URL.createObjectURL(blob)
    }
  
    const cssURL = getBlobURL(css, 'text/css')
    const jsURL = getBlobURL(js, 'text/javascript')
  
    const source = `
      <html>
        <head>
          ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
          ${js && `<script src="${jsURL}"></script>`}
        </head>
        <body>
          ${html || ''}
        </body>
      </html>
    `
  
    return getBlobURL(source, 'text/html')
  }
  const Map = Map5();

  // const url = getGeneratedPageURL({
  //   html: '<p>Hello, world!</p>',
  //   css: 'p { color: blue; }',
  //   js: 'console.log("hi")'
  // })
  const url = getGeneratedPageURL({
    html: `${Map}`,
    css: 'p { color: blue; }',
    js: `${Map}`
  })
  
//   const getBlobURL = (code, type) => {
//     const blob = new Blob([code], { type })
//     return URL.createObjectURL(blob)
//   }
//   const jsURL = getBlobURL({Map}, 'text/javascript')
//   const source = `
//   <html>
//     <head>
//       ${Map && `<script src="${jsURL}"></script>`}
//     </head>
//     <body>
//     ${html || ''}
//     </body>
//   </html>
// ` 
  const final = getBlobURL(Map, 'text/html')
  // console.log("Final!: ",final)
  console.log("map:",Map)
  return (
    <div>
      {/* <iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=147.48046875000003%2C-36.0268893543019%2C153.60534667968753%2C-31.746854162921395&amp;layer=mapnik&amp;marker=-33.91373381431626%2C150.54290771484375"></iframe> */}
      <iframe width="425" height="350" src={url}></iframe>
      </div>
  );
  //return source;
}

export default App;
