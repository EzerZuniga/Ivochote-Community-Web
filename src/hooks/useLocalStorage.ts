import { useState } from 'react';

export default function useLocalStorage(key: string, initialValue: any){
  const [state, setState] = useState(()=>{
    try{
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : initialValue;
    }catch{ return initialValue }
  });
  const set = (val: any)=>{
    setState(val);
    try{ localStorage.setItem(key, JSON.stringify(val)); }catch{}
  };
  return [state, set] as const;
}
