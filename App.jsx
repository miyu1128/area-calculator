import { useState, useMemo } from "react";

export default function App() {
  const [h, setH] = useState("");
  const [w, setW] = useState("");
  const [n, setN] = useState("");

  const result = useMemo(() => {
    const hh = parseFloat(h);
    const ww = parseFloat(w);
    const nn = parseFloat(n);

    if (!hh || !ww || !nn) return null;

    return (hh * ww * nn) / 1000000;
  }, [h, w, n]);

  return (
    <div style={{ padding: 20 }}>
      <h2>接着面積計算</h2>

      <input placeholder="高さ(mm)" value={h} onChange={(e) => setH(e.target.value)} />
      <br />

      <input placeholder="横(mm)" value={w} onChange={(e) => setW(e.target.value)} />
      <br />

      <input placeholder="枚数" value={n} onChange={(e) => setN(e.target.value)} />
      <br /><br />

      <div>結果：{result ?? "---"}</div>
    </div>
  );
}
