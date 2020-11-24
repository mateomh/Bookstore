/* eslint-disable */
import React from 'react';
import BookStyles from './styles/book.module.css';

function book(props) {
  const { book, callbackFcn } = props;

  return (
    <div className={BookStyles.LessonPanel}>
      <div>
        <p className={BookStyles.SchoolOf}>{book.category}</p>
        <h1 className={BookStyles.title}>{book.title}</h1>
        <p className={BookStyles.Author}>Susanne Collins</p>
        <a className={BookStyles.Comments}>Comments</a> | <a onClick={callbackFcn} id={book.id} className={BookStyles.Remove}>Remove</a> | <a className={BookStyles.Edit}>Edit</a>
      </div>
      <div className={BookStyles.Rectangle3}>
        <div className={BookStyles.Oval2} />
        <div>
          <p className={BookStyles.PercentComplete}>64%</p>
          <p className={BookStyles.Completed}>Completed</p>
        </div>
      </div>
      <div className={BookStyles.ChapterInfo}>
        <p className={BookStyles.CurrentChapter}>Current Chapter</p>
        <p className={BookStyles.CurrentLesson}>Current Lesson</p>
        <button className={BookStyles.Rectangle2}>UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default book;
