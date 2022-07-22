import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function IndividualAuthorPage() {
  const router = useRouter();
  const [authorDetails, setAuthorDetails] = useState({});
  const { firebaseKey } = router.query;
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);
  return (
    <>
      <div>
        <h2>
          {authorDetails.first_name} {authorDetails.last_name}
        </h2>
        <h5>
          Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
        </h5>
        <hr />
        <div className="container bookCardContainer">
          {authorDetails.books?.map((book) => (
            <BookCard
              key={book.firebaseKey}
              bookObj={book}
              onUpdate={() => {
                viewAuthorDetails(firebaseKey).then(setAuthorDetails);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
