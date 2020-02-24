import React from 'react';
import { NextPage } from 'next';

type Props = {
  color?: string;
};

const LogoText: NextPage<Props> = ({ color }) => {
  return (
    <svg style={{ width: '207px' }} viewBox="0 0 261.21 26.38">
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M9.23,3.74V11h.5a4.48,4.48,0,0,0,1.9-.35,2.93,2.93,0,0,0,1.25-1.18,5.35,5.35,0,0,0,.67-2.24H14V16h-.45c-.16-1.66-.61-2.76-1.34-3.29a4.12,4.12,0,0,0-2.48-.79h-.5v5.37A5.53,5.53,0,0,0,9.38,19a1.36,1.36,0,0,0,.58.59,2.42,2.42,0,0,0,1.17.25h.58v.48H2.54V19.8h.58a2.44,2.44,0,0,0,1.23-.27,1.21,1.21,0,0,0,.52-.62A5.55,5.55,0,0,0,5,17.28V5.73a6,6,0,0,0-.14-1.68,1.36,1.36,0,0,0-.58-.59,2.31,2.31,0,0,0-1.17-.25H2.54V2.73h14.8v5h-.53a4.62,4.62,0,0,0-.93-2.62,4.07,4.07,0,0,0-2.15-1.21,14.74,14.74,0,0,0-2.87-.19Z"
      />
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M25,12.6v4.72A5.32,5.32,0,0,0,25.18,19a1.26,1.26,0,0,0,.59.57,4,4,0,0,0,1.58.21v.46H18.73v-.46a3.81,3.81,0,0,0,1.59-.22A1.26,1.26,0,0,0,20.9,19a5.26,5.26,0,0,0,.17-1.72V6.4a5.21,5.21,0,0,0-.17-1.72,1.21,1.21,0,0,0-.59-.57,4,4,0,0,0-1.58-.21V3.44h7.83A17.22,17.22,0,0,1,31,3.86a4.51,4.51,0,0,1,2.3,1.56,4.18,4.18,0,0,1,.9,2.67,4,4,0,0,1-1.34,3.07,5.5,5.5,0,0,1-2.4,1.16L34.54,18a9.7,9.7,0,0,0,1.13,1.38,2.19,2.19,0,0,0,1.18.42v.46h-5.3L26.12,12.6Zm0-8.25v7.37h.7a8,8,0,0,0,2.59-.31,2.55,2.55,0,0,0,1.34-1.15,4.12,4.12,0,0,0,.49-2.15,3.92,3.92,0,0,0-.9-2.84,3.88,3.88,0,0,0-2.9-.92Z"
      />
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M43.62,3.21a8.34,8.34,0,0,1,9.05,8.59,9,9,0,0,1-1.87,5.63,8.32,8.32,0,0,1-7,3.23,8.48,8.48,0,0,1-7-3.08,8.88,8.88,0,0,1-2-5.77,8.4,8.4,0,0,1,2.55-6.25A8.1,8.1,0,0,1,43.62,3.21Zm.15.79a3.79,3.79,0,0,0-3.51,2.36,12.5,12.5,0,0,0-1,5.56c0,2.87.5,5,1.51,6.37a3.47,3.47,0,0,0,3,1.44,3.56,3.56,0,0,0,2.13-.62,5.07,5.07,0,0,0,1.7-2.54A14,14,0,0,0,48.19,12a15,15,0,0,0-.62-5A4.89,4.89,0,0,0,46,4.68,3.77,3.77,0,0,0,43.77,4Z"
      />
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M64.3,3.06l.14,5.61h-.51a5.76,5.76,0,0,0-1.77-3.4,4.46,4.46,0,0,0-3-1.28,2.85,2.85,0,0,0-2,.67,2.1,2.1,0,0,0-.74,1.56,2,2,0,0,0,.26,1,4.21,4.21,0,0,0,1.16,1.15,24.25,24.25,0,0,0,2.69,1.45,11.9,11.9,0,0,1,4,2.75,4.62,4.62,0,0,1,1,2.95,4.78,4.78,0,0,1-1.64,3.63,5.89,5.89,0,0,1-4.18,1.52,6.57,6.57,0,0,1-1.5-.16,10.47,10.47,0,0,1-1.78-.61,2.71,2.71,0,0,0-1-.24,1.25,1.25,0,0,0-.68.24,1.7,1.7,0,0,0-.58.76h-.46V14.31h.46a7.28,7.28,0,0,0,2.1,4.09,4.93,4.93,0,0,0,3.36,1.41,3.15,3.15,0,0,0,2.21-.76,2.27,2.27,0,0,0,.51-2.92,3.61,3.61,0,0,0-1-1.06,14.32,14.32,0,0,0-2.28-1.31,19.61,19.61,0,0,1-3.31-1.93,5.92,5.92,0,0,1-1.54-1.77,4.38,4.38,0,0,1-.54-2.16,4.57,4.57,0,0,1,1.48-3.43,5.16,5.16,0,0,1,3.72-1.41,6,6,0,0,1,1.59.2,7.19,7.19,0,0,1,1.42.55,3.32,3.32,0,0,0,1.17.4.63.63,0,0,0,.51-.2,2.21,2.21,0,0,0,.35-.95Z"
      />
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M80.61,3.44V8h-.45a7.2,7.2,0,0,0-.88-2.27A3.38,3.38,0,0,0,78,4.63a4.21,4.21,0,0,0-1.65-.22H75.05v13A5.13,5.13,0,0,0,75.19,19a1.27,1.27,0,0,0,.56.57,2.26,2.26,0,0,0,1.13.24h.56v.46H68.63v-.46h.56a2.37,2.37,0,0,0,1.18-.26,1.28,1.28,0,0,0,.51-.6A5.23,5.23,0,0,0,71,17.4v-13H69.8a3.57,3.57,0,0,0-2.48.72A4.77,4.77,0,0,0,66,8h-.47V3.44Z"
      />
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M104.66,14.12,104,20.28H88.43V19.8H89a2.44,2.44,0,0,0,1.23-.27,1.25,1.25,0,0,0,.52-.62,5.55,5.55,0,0,0,.14-1.63V5.73a6,6,0,0,0-.14-1.68,1.36,1.36,0,0,0-.58-.59A2.31,2.31,0,0,0,89,3.21h-.58V2.73h9.35v.48H97a2.44,2.44,0,0,0-1.23.27,1.22,1.22,0,0,0-.53.62,5.2,5.2,0,0,0-.14,1.63V16.91a5.91,5.91,0,0,0,.15,1.72,1,1,0,0,0,.61.55,6.65,6.65,0,0,0,1.56.11h1.47a5,5,0,0,0,2.33-.49,4.39,4.39,0,0,0,1.61-1.55,12.54,12.54,0,0,0,1.28-3.13Z"
      />
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M115.47,15.48h-6l-.7,1.64a3.72,3.72,0,0,0-.35,1.36,1.12,1.12,0,0,0,.57,1,5,5,0,0,0,1.65.3v.46h-5.6v-.46a2.48,2.48,0,0,0,1.49-.75A10,10,0,0,0,108,16.53l6-13.44h.24l6.07,13.81a8.44,8.44,0,0,0,1.43,2.47,1.92,1.92,0,0,0,1.19.45v.46h-8.14v-.46h.33a2.47,2.47,0,0,0,1.38-.28.66.66,0,0,0,.27-.57,1.51,1.51,0,0,0-.07-.46c0-.07-.14-.38-.37-.93Zm-.42-.91-2.51-5.8L110,14.57Z"
      />
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M141.52,3.44V3.9a1.61,1.61,0,0,0-.79.26,1.86,1.86,0,0,0-.57.68c0,.1-.31.75-.78,1.93L134.1,20.66h-.49L129.44,9.81l-4.59,10.85h-.46L118.85,6.92a14.13,14.13,0,0,0-1.18-2.51,1.53,1.53,0,0,0-1.13-.51V3.44h7.3V3.9a2.09,2.09,0,0,0-1.17.27.76.76,0,0,0-.29.6,7.27,7.27,0,0,0,.61,2l3.3,8.17,2.64-6.38-.69-1.79a14.29,14.29,0,0,0-.88-2,2,2,0,0,0-.72-.7,2.62,2.62,0,0,0-1.18-.21V3.44h8.15V3.9a4.28,4.28,0,0,0-1.23.14.75.75,0,0,0-.4.29.78.78,0,0,0-.15.47,8.48,8.48,0,0,0,.55,1.75l3.07,8L138.2,7.3a15.37,15.37,0,0,0,.53-1.52,3.12,3.12,0,0,0,.1-.76,1,1,0,0,0-.35-.8,2.22,2.22,0,0,0-1.33-.32V3.44Z"
      />
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M155.49,3.74V11h.5a4.56,4.56,0,0,0,1.91-.35,3,3,0,0,0,1.24-1.18,5.21,5.21,0,0,0,.67-2.24h.45V16h-.45c-.16-1.66-.61-2.76-1.34-3.29a4.1,4.1,0,0,0-2.48-.79h-.5v5.37a5.53,5.53,0,0,0,.15,1.68,1.36,1.36,0,0,0,.58.59,2.42,2.42,0,0,0,1.17.25H158v.48H148.8V19.8h.58a2.44,2.44,0,0,0,1.23-.27,1.21,1.21,0,0,0,.52-.62,5.55,5.55,0,0,0,.14-1.63V5.73a6,6,0,0,0-.14-1.68,1.36,1.36,0,0,0-.58-.59,2.31,2.31,0,0,0-1.17-.25h-.58V2.73h14.8v5h-.53a4.7,4.7,0,0,0-.92-2.62A4.14,4.14,0,0,0,160,3.93a14.74,14.74,0,0,0-2.87-.19Z"
      />
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M173.83,19.82v.46H165v-.46h.56a2.37,2.37,0,0,0,1.18-.26,1.16,1.16,0,0,0,.5-.6,5.23,5.23,0,0,0,.13-1.56V6.32a5.61,5.61,0,0,0-.13-1.61,1.22,1.22,0,0,0-.56-.57,2.22,2.22,0,0,0-1.12-.24H165V3.44h8.8V3.9h-.55a2.35,2.35,0,0,0-1.18.26,1.18,1.18,0,0,0-.51.6,5.1,5.1,0,0,0-.14,1.56V17.4a5.47,5.47,0,0,0,.14,1.61,1.32,1.32,0,0,0,.56.57,2.26,2.26,0,0,0,1.13.24Z"
      />
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M181.6,12.6v4.72a5.21,5.21,0,0,0,.17,1.72,1.21,1.21,0,0,0,.59.57,4,4,0,0,0,1.58.21v.46h-8.62v-.46a3.72,3.72,0,0,0,1.58-.22,1.24,1.24,0,0,0,.59-.56,5.26,5.26,0,0,0,.17-1.72V6.4a5.21,5.21,0,0,0-.17-1.72,1.21,1.21,0,0,0-.59-.57,4,4,0,0,0-1.58-.21V3.44h7.82a17.12,17.12,0,0,1,4.47.42,4.49,4.49,0,0,1,2.31,1.56,4.18,4.18,0,0,1,.9,2.67,4,4,0,0,1-1.34,3.07,5.55,5.55,0,0,1-2.4,1.16l4,5.7a9,9,0,0,0,1.13,1.38,2.19,2.19,0,0,0,1.18.42v.46h-5.31l-5.42-7.68Zm0-8.25v7.37h.71a8,8,0,0,0,2.58-.31,2.57,2.57,0,0,0,1.35-1.15,4.12,4.12,0,0,0,.49-2.15,3.92,3.92,0,0,0-.9-2.84,3.88,3.88,0,0,0-2.9-.92Z"
      />
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M206,14.54l4.57-11.1h6.85V3.9h-.54a2.36,2.36,0,0,0-1.19.26,1.19,1.19,0,0,0-.5.59A5,5,0,0,0,215,6.3V17.4a5.47,5.47,0,0,0,.14,1.61,1.27,1.27,0,0,0,.56.57,2.28,2.28,0,0,0,1.13.24h.54v.46h-8.79v-.46h.55a2.39,2.39,0,0,0,1.19-.26,1.21,1.21,0,0,0,.5-.6A5.1,5.1,0,0,0,211,17.4V4.92l-6.46,15.36h-.3L197.69,5V16.89a10.67,10.67,0,0,0,.06,1.52,1.78,1.78,0,0,0,.7,1,2.91,2.91,0,0,0,1.69.39v.46h-5.76v-.46h.18a2.56,2.56,0,0,0,1-.18,1.64,1.64,0,0,0,.73-.52,2.22,2.22,0,0,0,.39-.9c0-.09,0-.52,0-1.27V6.3a5.53,5.53,0,0,0-.13-1.6,1.25,1.25,0,0,0-.56-.56,2.28,2.28,0,0,0-1.13-.24h-.54V3.44h6.88Z"
      />
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M217.92,24.73v-.54A4.59,4.59,0,0,0,220,22.58a3.58,3.58,0,0,0,.65-2,.56.56,0,0,0-.08-.32.24.24,0,0,0-.18-.1.5.5,0,0,0-.22.09,1.76,1.76,0,0,1-.9.21,1.71,1.71,0,0,1-1.27-.57,1.89,1.89,0,0,1-.54-1.34,2,2,0,0,1,.62-1.44,2,2,0,0,1,1.51-.62,2.37,2.37,0,0,1,1.82.82,3.21,3.21,0,0,1,.76,2.27,5,5,0,0,1-1.08,3.15A6.12,6.12,0,0,1,217.92,24.73Z"
      />
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M233.79,12.65v4.67A5.21,5.21,0,0,0,234,19a1.21,1.21,0,0,0,.59.57,4,4,0,0,0,1.58.21v.46h-8.56v-.46a3.72,3.72,0,0,0,1.58-.22,1.24,1.24,0,0,0,.59-.56,5.36,5.36,0,0,0,.16-1.72V6.4a5.32,5.32,0,0,0-.16-1.72,1.21,1.21,0,0,0-.59-.57,4,4,0,0,0-1.58-.21V3.44h7.34q3.63,0,5.2,1.29A4,4,0,0,1,241.69,8a4.14,4.14,0,0,1-1,2.81,5.27,5.27,0,0,1-2.81,1.59A19.9,19.9,0,0,1,233.79,12.65Zm0-8.24v7.28l.62,0a3,3,0,0,0,2.34-.9A4.08,4.08,0,0,0,237.57,8a3.92,3.92,0,0,0-.82-2.74,3.23,3.23,0,0,0-2.45-.87Z"
      />
      <path
        style={{ fill: color !== undefined ? color : '#2c74ac' }}
        d="M258.21,3.06V8.89h-.48a6.27,6.27,0,0,0-2-3.5,5.22,5.22,0,0,0-3.38-1.22,5,5,0,0,0-2.89.91,5.32,5.32,0,0,0-1.93,2.37,10.76,10.76,0,0,0-.78,4.17,14,14,0,0,0,.57,4.12,5.51,5.51,0,0,0,1.79,2.81,5,5,0,0,0,3.15.94,6.25,6.25,0,0,0,2.92-.69,9.84,9.84,0,0,0,2.78-2.4v1.46A9.26,9.26,0,0,1,255,20a9,9,0,0,1-3.58.66,10.26,10.26,0,0,1-4.78-1.08,7.61,7.61,0,0,1-3.23-3.1,8.66,8.66,0,0,1-1.14-4.31A8.92,8.92,0,0,1,243.5,7.6a8.89,8.89,0,0,1,3.4-3.35,9.18,9.18,0,0,1,4.55-1.19,10.14,10.14,0,0,1,3.75.77,6.08,6.08,0,0,0,1.46.44.94.94,0,0,0,.69-.29,1.6,1.6,0,0,0,.38-.92Z"
      />
    </svg>
  );
};

export default LogoText;
