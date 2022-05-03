import React, {useState} from 'react'
import { auth } from '@lib/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import LinkItem from '@components/simple/LinkItem';
import { collection, getFirestore, query, orderBy } from 'firebase/firestore';

export function LinkList() {
  // const ref = firestore.collection('users').doc(auth.currentUser.uid).collection('posts');
  // const query = ref.orderBy('createdAt');

  const ref = collection(getFirestore(), 'users', auth.currentUser.uid, 'links')
  const linkQuery = query(ref, orderBy('createdAt')) 
  const [querySnapshot] = useCollection(linkQuery);

  
  const links = querySnapshot?.docs.map((doc) => doc.data());
  
  return (
    <>
      {
        links != undefined ?
        <Links links={links} />
        :
        ''
      }
    </>
  );
}

function Links({links, admin}){
  return links ? links.map((link) => <LinkItem link={link} key={link.slug} admin={admin} />) : null;
}
