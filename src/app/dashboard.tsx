"use client";

import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('./worker.js', import.meta.url));
    worker.onmessage = (event) => {
      setD(event.data);
      worker.terminate();
    };
    worker.postMessage({});
  }, []);

  return <div>{d}</div>;
}