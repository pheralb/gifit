import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      height={32}
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="4 2 16.32 20"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M6.331 4.286H17.99v15.428H6.33z" fill="#000" />
        <g fillRule="nonzero">
          <path d="M4 3.714h2.331v16.572H4z" fill="#04ff8e" />
          <path d="M17.989 8.286h2.331v12h-2.331z" fill="#8e2eff" />
          <path d="M4 19.714h16.32V22H4z" fill="#00c5ff" />
          <path d="M4 2h9.326v2.286H4z" fill="#fff152" />
          <path
            d="M17.989 6.571V4.286h-2.332V2h-2.331v6.857h6.994V6.571"
            fill="#ff5b5b"
          />
          <path d="M17.989 11.143V8.857h2.331" fill="#551c99" />
        </g>
        <path d="M13.326 2v2.286h-2.332" fill="#999131" />
      </g>
    </svg>
  )
}

export default SvgComponent