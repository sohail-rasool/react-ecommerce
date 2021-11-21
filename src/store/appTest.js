import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
  increaseCounter,
  decreaseCounter,
} from './store/actions/counterAction';

function App() {
  const dispatch = useDispatch();
  const addBtn = () => {
    dispatch(increaseCounter(5));
  };
  const removeBtn = () => {
    dispatch(decreaseCounter());
  };
  const count = useSelector((state) => state.counter.count);
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Button variant='primary' onClick={addBtn}>
                  Add
                </Button>
                <div>Count:{count} </div>
                <Button variant='danger' onClick={removeBtn}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
