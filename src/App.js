import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
  increaseCounter,
  decreaseCounter,
} from './store/actions/counterAction';
import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const dispatch = useDispatch();
  const addBtn = () => {
    dispatch(increaseCounter(5));
  };
  const removeBtn = () => {
    dispatch(decreaseCounter());
  };
  const count = useSelector((state) => state.counter.count);

  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);


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
          <Col>
            <nav>
              <div className="nav-center">
                <h1>overreacted</h1>
                <button className="btn" onClick={toggleTheme}>
                  toggle
                </button>
              </div>
            </nav>
            <section className="articles">
              {data.map((item) => {
                return <Article key={item.id} {...item} />;
              })}
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
