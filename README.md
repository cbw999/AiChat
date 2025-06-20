## ai chat 봇
### 원소스는 오프소스 https://www.librechat.ai 를 참고하여 만들었습니다.

### bun 설치
## Bun은 Node.js, npm, Webpack, Babel 등 기존의 여러 JavaScript 도구들을 대체하거나 통합하려는 목적으로 만들어진 새로운 JavaScript 런타임이자 올인원 툴킷입니다.
### PowerShell 버전 7.5.1.0 으로 업그레이드 하면 pwsh 라는 파워셀을 사용할수 있다. 먼저 업그레이드 후 bun을 설치한다.
```
winget install --id Microsoft.PowerShell --source winget
pwsh -c "irm bun.sh/install.ps1 | iex"
```

### 모노레포 방식으로 client,서버를 최상단 메인에서 관리 하위 시스템은 workspaces에 등록하여 관리

### 전체 node_module 설치 package-lock.json 파일이 없을때 디폴트로 설치
```
npm install
```

### 전체 node_module 설치 package-lock.json 기록된 정확한 버전으로 설치
```
npm ci
```

### 프런트엔드 빌드
```
npm run frontend
```