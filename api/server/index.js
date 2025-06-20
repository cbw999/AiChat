// 간단한 Express 서버 예제
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 기본 라우트
app.get('/', (req, res) => {
  res.send('서버가 정상적으로 동작합니다!');
});

// 서버 기동
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
