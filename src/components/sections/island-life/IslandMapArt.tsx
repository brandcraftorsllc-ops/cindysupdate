/** Hand-drawn coastline illustration behind the community pins. */
export function IslandMapArt() {
  return (
    <svg viewBox="0 0 480 440" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 h-full w-full" fill="none">
      <path
        d="M-10 -10 L152 -10 C164 40 148 86 156 132 C164 178 142 214 150 258 C158 302 132 338 142 384 C150 418 128 432 118 450 L-10 450 Z"
        fill="hsl(38 44% 92% / 0.9)"
        stroke="hsl(184 64% 26% / 0.28)"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M96 -10 C104 40 92 74 104 116 C114 152 100 186 108 224" stroke="hsl(184 64% 26% / 0.22)" strokeWidth="1" />
      <path
        d="M150 40 C200 62 250 106 268 158 C282 206 258 252 266 298 C276 342 246 386 258 430 L120 430 C132 388 146 344 138 296 C130 248 146 196 140 142 C136 100 144 66 150 40 Z"
        fill="hsl(176 38% 80% / 0.6)"
        stroke="hsl(184 64% 26% / 0.18)"
        strokeWidth="1"
      />
      <path
        d="M300 -10 C312 60 294 122 284 178 C274 234 270 282 260 320 C250 356 232 372 220 392 C206 414 196 430 196 450 L500 450 L500 -10 Z"
        fill="hsl(199 62% 82% / 0.45)"
        stroke="hsl(184 64% 26% / 0.26)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <g stroke="hsl(184 64% 26% / 0.18)" strokeWidth="1" strokeLinecap="round">
        <path d="M392 96 C408 104 420 104 434 98" />
        <path d="M400 150 C416 158 428 158 442 152" />
        <path d="M382 214 C398 222 410 222 424 216" />
        <path d="M358 372 C374 380 386 380 400 374" />
      </g>
      <path
        d="M298 110 C310 114 316 130 318 150 C322 194 318 236 328 270 C336 298 332 320 320 332 C308 342 294 336 288 320 C280 298 286 270 282 238 C278 204 284 170 286 144 C288 126 292 114 298 110 Z"
        fill="hsl(38 44% 94%)"
        stroke="hsl(184 64% 26% / 0.42)"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M352 258 C364 260 370 270 366 282 C362 292 350 294 344 286 C338 278 342 262 352 258 Z"
        fill="hsl(38 44% 94%)"
        stroke="hsl(184 64% 26% / 0.42)"
        strokeWidth="1.1"
      />
      <path
        d="M296 376 C312 370 332 376 338 388 C342 402 330 414 312 412 C294 410 282 398 284 386 C286 380 290 378 296 376 Z"
        fill="hsl(38 44% 94%)"
        stroke="hsl(184 64% 26% / 0.42)"
        strokeWidth="1.1"
      />
      <path
        d="M150 252 C192 254 220 272 244 286 C264 298 276 310 286 318"
        stroke="hsl(184 64% 26% / 0.5)"
        strokeWidth="1.1"
        strokeDasharray="5 5"
        strokeLinecap="round"
      />
    </svg>
  );
}
