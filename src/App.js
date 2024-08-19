import { useState,useEffect } from "react";
import { db, auth} from '/firebaseConnection';

import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
}from 'firebase/auth'

function app(){
  const [titulo, setTitulo] = useState ("");
  const [autor, setAutor] = useState ("");
  const [idPost, setIdPost] = useState ("");

const [email, setEmail] = useState ("");
const [senha, setSenha] =useState ("");

const [post, setPost] = useState([]);

const [user, setUser] = useState ("");
const [detalheUser, setDetalheUser] = useState ({});
}