import React from "react";
const CopyCardPopover = () => {
  return (
    <div class="popover copy-card">
      <div>
        <header>
          <span>Copy Card</span>
          <a href="#" class="icon-sm icon-close"></a>
        </header>
        <div class="content">
          <label>Title</label>
          <textarea name="name" style={{ marginBottom: "12px" }}>
            Card title
          </textarea>
          <label>Keep…</label>
          <div class="check-div clearfix">
            <input
              id="keep-comments"
              type="checkbox"
              name="comments"
              checked="checked"
            />
            <label for="keep-comments">
              Comments <span class="quiet">(1)</span>
            </label>
          </div>
          <br />
          <label>Copy to…</label>
          <div class="button-link setting board">
            <span class="label">Board</span>
            <span class="value js-board-value">First Board</span>
            <label>Board</label>
            <select>
              <option value="1" selected>
                First Board (current)
              </option>
              <option value="2">Second Board</option>
              <option value="3">Third Board</option>
              <option value="4">Fourth Board</option>
              <option value="5">Fifth Board</option>
            </select>
          </div>
          <div>
            <div class="button-link setting list">
              <span class="label">List</span>
              <span class="value js-list-value">Intermediate</span>
              <label>List</label>
              <select>
                <option value="1">Basics</option>
                <option value="2" selected="selected">
                  Intermediate (current)
                </option>
                <option value="3">Advanced</option>
              </select>
            </div>
            <div class="button-link setting position">
              <span class="label">Position</span>
              <span class="value">1</span>
              <label>Position</label>
              <select>
                <option value="top" selected="selected">
                  1 (current)
                </option>
                <option value="98303">2</option>
                <option value="163839">3</option>
                <option value="212991">4</option>
                <option value="245759">5</option>
                <option value="278527">6</option>
                <option value="311295">7</option>
                <option value="bottom">8</option>
              </select>
            </div>
          </div>

          <button class="button" type="submit">
            Create Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopyCardPopover;
