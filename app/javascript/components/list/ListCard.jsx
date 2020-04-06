import React from "react";
import { Link } from "react-router-dom";
import { dueClass, formatDueDate } from "../../utils/helpers";

const ListCard = ({ id, title, labels, description, due_date, comments_count, completed }) => {
  const dueDateClass = due_date ?  ` ${dueClass(due_date)}` : "";
  const formattedDueDate = formatDueDate(due_date)
  const completedClass = completed ? " completed" : "";
  return (
    <Link to={`/cards/${id}`} data-card-id={id}>
      <div className="card-background">
        <div className="card ">
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="card-info">
            {labels
              ? labels.map((label, idx) => (
                  <div
                    key={idx}
                    className={`card-label ${label} colorblindable`}
                  ></div>
                ))
              : null}
            <p>{title}</p>
          </div>
          <div className="card-icons">
            {description ? <i className="description-icon sm-icon"></i> : null}
            {due_date ? <i className={`clock-icon sm-icon${dueDateClass}${completedClass}`}>{formattedDueDate}</i> : null}
            {comments_count > 0 ? <i className="comment-icon sm-icon"></i> : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
