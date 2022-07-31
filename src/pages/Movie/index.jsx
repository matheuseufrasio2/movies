import {
  addDoc, collection, getDocs,
} from 'firebase/firestore';
import { FiArrowLeft } from 'react-icons/fi';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../../lib/firebase';

import {
  Container,
  MakeCommentContainer,
  TextArea,
  Button,
  CommentsContainer,
  Comment,
} from './styles';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function Movie() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

  console.log(comments);
  const { slug } = useParams();

  const getData = useCallback(async () => {
    const commentsCollection = collection(db, 'comments');
    await getDocs(commentsCollection)
      .then((snapshot) => {
        const commentsDoc = [];
        snapshot.docs.forEach((document) => {
          if (document.data().movieId === slug) {
            const date = new Date(document.data().created_at);
            const dateFormatted = `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;
            commentsDoc.push({ ...document.data(), id: document.id, dateFormatted });
          }
        });
        setComments(commentsDoc);
      });
  }, [slug]);

  useEffect(() => {
    getData();
  }, [getData, slug]);

  function handleChangeComment(e) {
    setComment(e.target.value);
  }

  async function handleSubmitComment() {
    setIsSubmittingComment(true);
    const commentsCollection = collection(db, 'comments');
    await addDoc(commentsCollection, {
      movieId: slug,
      comment,
      created_at: new Date().toUTCString(),
    });

    setIsSubmittingComment(false);
    getData();
    setComment('');
  }
  return (
    <Container>
      <Link to="/">
        <FiArrowLeft size={22} />
        <span>Back</span>
      </Link>
      <MakeCommentContainer>
        <TextArea
          name="comment"
          placeholder="Give us your comment about this movie"
          onChange={handleChangeComment}
          value={comment}
        />
        <Button
          onClick={handleSubmitComment}
          disabled={isSubmittingComment || comment.length === 0}
        >
          {isSubmittingComment ? 'Sending...' : 'Send Comment'}
        </Button>
      </MakeCommentContainer>

      {comments.length > 0 ? (
        <CommentsContainer>
          {comments.map((commentItem) => (
            <Comment key={commentItem.id}>
              <strong>{commentItem.comment}</strong>
              <span>{commentItem.dateFormatted}</span>
            </Comment>
          ))}
        </CommentsContainer>
      ) : (
        <div>Nothing to show</div>
      )}
    </Container>
  );
}
