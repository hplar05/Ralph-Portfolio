import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Ralph Saladino Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#eae9e0',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          border: '20px solid #2c2c2c',
          boxShadow: 'inset 20px 20px 0px rgba(44, 44, 44, 0.2)',
        }}
      >
        <div style={{
          display: 'flex',
          color: '#2c2c2c',
          fontSize: 80,
          fontFamily: 'monospace',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          background: '#fdfdfc',
          padding: '40px 80px',
          border: '4px solid #2c2c2c',
          boxShadow: '12px 12px 0px rgba(44, 44, 44, 0.2)',
        }}>
          <span style={{ color: '#3b5998', marginRight: '30px' }}>&gt;</span> RALPH_SALADINO_
        </div>
      </div>
    ),
    { ...size }
  )
}
