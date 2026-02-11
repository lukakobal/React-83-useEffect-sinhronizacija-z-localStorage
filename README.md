# ⚛️ React 83 – LocalStorage Counter

## 🎯 Kaj sem se učil
- useEffect ob mountu
- useEffect ob spremembi state-a
- Sinhronizacija z localStorage
- Zakaj potrebujemo dva useEffect-a

## 🧠 Koncept
1. Prvi useEffect prebere shranjeno vrednost (teče 1x)
2. Drugi useEffect shrani novo vrednost (teče ob spremembi count)

## 🚀 Funkcionalnost
- Števec se shrani v localStorage
- Ob osvežitvi strani vrednost ostane

  https://codesandbox.io/p/sandbox/3pnds4?file=%2Fsrc%2FApp.js
