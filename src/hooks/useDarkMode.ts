import { useEffect, useState } from 'react';

export default function useDarkMode(){
  const [isDark, setIsDark] = useState(false);
  useEffect(()=>{
    const v = localStorage.getItem('dark');
    setIsDark(v === '1');
  },[]);
  return [isDark, setIsDark] as const;
}
