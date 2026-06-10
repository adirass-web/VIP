const sharp = require('sharp');
function groove(cx,cy,R,a1,n1,p1,a2,n2,p2){let d="";for(let t=0;t<=720;t++){const th=t*Math.PI/360;const r=R+a1*Math.sin(n1*th+p1)+a2*Math.sin(n2*th+p2);d+=(t?"L":"M")+(cx+r*Math.cos(th)).toFixed(2)+" "+(cy+r*Math.sin(th)).toFixed(2);}return d+"Z";}
const W=1200,H=630,cx=W/2,cy=H/2;
let grooves="";
for(let i=0;i<40;i++){const R=46+i*3.0;const gx=cx+3.2*Math.sin(i*0.35),gy=cy+3.2*Math.cos(i*0.28);grooves+=`<path d="${groove(gx,gy,R,2.4,11,i*0.42,1.0,23,-i*0.21)}" fill="none" stroke="#C8892A" stroke-width="0.6" opacity="0.30"/>`;}
const seal=`
<g transform="translate(${cx} ${cy})">
  <circle r="78" fill="#0B0A09"/>
  <circle r="78" fill="none" stroke="#C8892A" stroke-width="2.4"/>
  <circle r="69" fill="none" stroke="#C8892A" stroke-width="1.1" opacity="0.5"/>
  <g fill="none" stroke="#C8892A" transform="scale(1.05) translate(-50 -55)">
    <path d="M24 35 L50 26 L76 35" stroke-width="9"/>
    <path d="M72 33.6 V48 C72 62 64 74 54 83" stroke-width="7"/>
    <path d="M55 81 C48 77 43 71 40 64" stroke-width="8"/>
    <path d="M30 35 V50 C30 55 28 59 26 63" stroke-width="6"/>
  </g>
</g>`;
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#0B0A09"/>
  <g opacity="0.9">${grooves}</g>
  <rect x="22" y="22" width="${W-44}" height="${H-44}" fill="none" stroke="#C8892A" stroke-width="1" opacity="0.45"/>
  <rect x="22" y="22" width="${W-44}" height="4" fill="#C8892A" opacity="0.85"/>
  ${seal}
</svg>`;
sharp(Buffer.from(svg)).png().toFile('assets/img/og-default.png').then(i=>console.log('og-default.png',i.width+'x'+i.height,Math.round(require('fs').statSync('assets/img/og-default.png').size/1024)+'KB'));
