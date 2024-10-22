import React, { useRef, useState, useEffect } from 'react';
import { auth, database } from '../config/FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs if needed

export default function AddData() {
  const nameRef = useRef();
  const ageRef = useRef();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const age = ageRef.current.value;

    if (user) {
      const userId = user.uid;

      set(ref(database, 'userData/' + userId), {
        name: name,
        age: age
      })
      .then(() => {
        alert('Data added successfully');
        nameRef.current.value = '';
        ageRef.current.value = '';
      })
      .catch((error) => {
        console.error('Error adding data: ', error);
      });
    } else {
      alert('User not authenticated');
    }
  };

  return (
    <div>
      <h2>Add Data to Firebase</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter name" 
          ref={nameRef}
        />
        <input 
          type="number" 
          placeholder="Enter age" 
          ref={ageRef}
        />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
}