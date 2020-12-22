import { useState, useEffect } from 'react';
import { db } from '../config/fbConfig';

const useFirestore = (uid) => {
  const [doc, setDoc] = useState([]);

  useEffect(() => {
    const unsub = db
      .collection('users')
      .doc(uid)
      .onSnapshot((snap) => {
        setDoc({ ...snap.data() });
      });
    return () => unsub();
  }, [uid]);

  return { doc };
};

export default useFirestore;
