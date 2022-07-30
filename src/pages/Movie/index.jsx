import {
  Container,
  MakeCommentContainer,
  TextArea,
  Button,
  CommentsContainer,
  Comment,
} from './styles';

export function Movie() {
  const comments = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum labore nostrum odio odit perferendis nihil temporibus deleniti modi eaque alias iure culpa, sunt sit accusantium qui placeat dolor ipsa.',
      date: '20th jun, 2022',
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum labore nostrum odio odit perferendis nihil temporibus deleniti modi eaque alias iure culpa, sunt sit accusantium qui placeat dolor ipsa.',
      date: '20th jun, 2022',
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum labore nostrum odio odit perferendis nihil temporibus deleniti modi eaque alias iure culpa, sunt sit accusantium qui placeat dolor ipsa.',
      date: '20th jun, 2022',
    },
    {
      id: 4,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum labore nostrum odio odit perferendis nihil temporibus deleniti modi eaque alias iure culpa, sunt sit accusantium qui placeat dolor ipsa.',
      date: '20th jun, 2022',
    },
    {
      id: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum labore nostrum odio odit perferendis nihil temporibus deleniti modi eaque alias iure culpa, sunt sit accusantium qui placeat dolor ipsa.',
      date: '20th jun, 2022',
    },
    {
      id: 6,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum labore nostrum odio odit perferendis nihil temporibus deleniti modi eaque alias iure culpa, sunt sit accusantium qui placeat dolor ipsa.',
      date: '20th jun, 2022',
    },
    {
      id: 7,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum labore nostrum odio odit perferendis nihil temporibus deleniti modi eaque alias iure culpa, sunt sit accusantium qui placeat dolor ipsa.',
      date: '20th jun, 2022',
    },
    {
      id: 8,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum labore nostrum odio odit perferendis nihil temporibus deleniti modi eaque alias iure culpa, sunt sit accusantium qui placeat dolor ipsa.',
      date: '20th jun, 2022',
    },
  ];
  return (
    <Container>
      <MakeCommentContainer>
        <TextArea name="comment" placeholder="Give us your comment about this movie" />
        <Button>
          Send
        </Button>
      </MakeCommentContainer>

      <CommentsContainer>
        {comments.map((comment) => (
          <Comment key={comment.id}>
            <strong>{comment.text}</strong>
            <span>{comment.date}</span>
          </Comment>
        ))}
      </CommentsContainer>
    </Container>
  );
}
