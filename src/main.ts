import './style.css'
import { base64url } from 'rfc4648';

const urlRegex = /terminal\.sexy\/#([a-zA-Z0-9_-]{72})/;
const values = [
    'background',
    'foreground',
    'black',
    'blue',
    'cyan',
    'green',
    'purple',
    'red',
    'white',
    'yellow',
    'brightBlack',
    'brightBlue',
    'brightCyan',
    'brightGreen',
    'brightPurple',
    'brightRed',
    'brightWhite',
    'brightYellow'
];

document.querySelector('#convertbutton')?.addEventListener('click', () => {
    if (!(document.querySelector('#urlfield') as HTMLInputElement).reportValidity()) return;

    const url = (document.querySelector('#urlfield') as HTMLInputElement).value;
    const b64 = url?.match(urlRegex)?.[1];
    const bytes = base64url.parse(b64 ?? '');
    let themeJson: any = {};
    themeJson.name = 'Replace this with a name of your choosing';
    values.forEach((e, i) => {
        let hex: string = '#';
        for(let j = i * 3; j <= (i * 3) + 2; j++) {
            hex += bytes[j].toString(16);
        }
        themeJson[e] = hex;
    });
    (document.querySelector('#jsonfield') as HTMLTextAreaElement).innerHTML = JSON.stringify(themeJson, null, 2);
});

document.querySelector('#copybutton')?.addEventListener('click', (e) => {
    navigator.clipboard.writeText((document.querySelector('#jsonfield') as HTMLTextAreaElement).innerHTML);
    (e.target as HTMLButtonElement).innerHTML = 'Copied';
});

document.querySelector('#urlfield')?.addEventListener('input', () => {
    (document.querySelector('#copybutton') as HTMLButtonElement).innerHTML = 'Copy';
});