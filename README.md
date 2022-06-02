# Next.js + Typescript + MSW + react-test-libary Example

- 백엔드가 구축 되기 이전에 프론트엔드 개발을 하기 위하여 MSW를 이용하기 위해 연습하기하는 Repository 입니다.

## Mock Service Worker

- 서비스 워커를 이용해서 네트워크 호출을 가로채는 API 모킹(mocking) 라이브러리
- 브라우저 환경, Node 환경, Test 환경 어디든 동일한 요청 핸들러를 이용 해서 생산성의 증가를 불러올 수 있음

**Usage**

```bash
npm i -D msw
```

- 라이브러리 다운로드

```bash
npx msw init public/ --save
```

- 서비스워커 코드 생성

```
📦src
 ┣ 📂mocks
 ┃ ┣ 📜browser.ts
 ┃ ┣ 📜handlers.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜server.ts
```

```ts
// handelr.ts
import { rest } from 'msw'

export const handlers = [
  rest.get('https://my.backend/book', async (req, res, ctx) => {
    return res(
      ctx.json({
        title: 'Lord of the Rings',
        imageUrl: '/book-cover.jpg',
        description:
          'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      })
    )
  }),
  rest.get('/reviews', (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.json([
        {
          id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
          author: 'John Maverick',
          text: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
        },
      ])
    )
  }),
]
```

- Mocking 서버로 다룰 `API Handler`

```ts
// browser.ts
import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)
```

- 브라우저에서 사용하기위한 서비스 워커 생성

```ts
// server.ts
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
```

- 노드서버에서 사용하기 위한 서버 생성

```ts
// index.ts
if (typeof window === 'undefined') {
  // NodeJS 환경

  const { server } = require('./server')
  server.listen()
} else {
  // Browser 환경
  const { worker } = require('./browser')
  worker.start()
}

export {}
```

- 환경에따라 적절한 서버 및 서비스워커 작동
