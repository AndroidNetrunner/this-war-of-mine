# This war of Mine boardgame 지원툴

## 소개

이 웹사이트는 This war of mine 보드게임에서 활용하기 위한 웹사이트입니다.

컴포넌트를 이용한 자원관리 대신, 이 웹사이트를 통해 '저장고', '발견물 더미', '거래'에서 자원관리를 더 쉽게 할 수 있습니다.

## 서버 실행 방법

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 페이지 별 기능 소개

### 저장고 페이지

1. 저장고는 현재 피난처에 있는 자원이 보관된 곳입니다. 저장고 페이지에서는 저장고에 있는 **자원 보유량**을 조절할 수 있습니다.

2. 물, 목재, 잡동사니를 제외한 자원은 **최대보유량**이 존재합니다. 특정 이벤트가 발생할 경우 최대보유량이 줄어드는데, 저장고 페이지에서 자원의 최대보유량을 조절할 수 있습니다.

3. 일부 자원은 이벤트로 인해 비싸지기도 합니다. 이벤트가 발생할 경우 저장고 페이지에서 **자원의 가격**을 조정할 수 있습니다.

### 발견물 더미 페이지

1. 야외에서 수집한 자원은 수집이 끝날 때까지 발견물 더미에 위치하게 됩니다. 발견물 더미 페이지에서는 **발견한 자원량**을 조정할 수 있습니다.

2. <저장고에 추가> 버튼 옆에는 현재 발견물 더미의 총 무게를 보여주며, <저장고에 추가> 버튼을 누를 경우 발견물 더미에 있는 자원들이 저장고로 이동합니다. (발견물 더미는 초기화됩니다.)

### 거래 페이지

1. 이번 거래의 수수료를 책정합니다. (거래를 하게 될 경우, 거래 수수료는 시나리오북 혹은 카드에 언급되어 있습니다.)

2. 거래 페이지에서는 나와 상대방의 자원 현황을 볼 수 있습니다. 먼저 **거래 장소**를 *피난처*와 _수집 지역_ 중 하나를 선택합니다. 거래 장소에 따라 판매 가능한 물품이 달라집니다.

- 피난처: **저장고**에서 판매 가능
- 수집 지역: **발견물 더미**에서 판매 가능

3. 선택한 거래 지역에 따라 판매가능한 물품 리스트와 구매 가능한 물품 리스트가 보여집니다. 내가 팔고 싶은 물품의 **보유량**과 구매하고 싶은 물품의 **구매량**을 조정합니다.

4. 거래는 **(판매 물품 총 가치) >= (구매 물품 총 가치) + (거래 수수료)** 인 경우에만 체결 버튼이 활성화됩니다. 활성화된 체결 버튼을 누르면 물품이 교환됩니다.

## 폴더 구조

```
src
├── components
│ ├── Findings.tsx
│ ├── Navbar.tsx
│ ├── ResourceRow.tsx
│ ├── Storage.tsx
│ ├── Trading.tsx
│ ├── TradingRow.tsx
│ ├── TradingTable.tsx
│ └── styles
│   ├── Findings.module.css
│   ├── Navbar.module.css
│   ├── ResourceRow.module.css
│   ├── Storage.module.css
│   ├── Trading.module.css
│   ├── TradingInOutside.module.css
│   ├── TradingInShelter.module.css
│   ├── TradingRow.module.css
│   └── TradingTable.module.css
├── hooks
│ ├── useFindingsHandlers.ts
│ └── useTradingPlace.ts
├── pages
│ ├── \_app.tsx
│ ├── findings
│ │ └── index.tsx
│ ├── index.tsx
│ └── shelter
│ └── index.tsx
├── redux
│ ├── slices
│ │ ├── findingsSlice.ts
│ │ ├── resourceSlice.ts
│ │ ├── storageSlice.ts
│ │ └── tradingSlice.ts
│ ├── store.ts
│ └── utils.ts
├── styles
│ └── globals.css
└── types
└── types.d.ts
```
