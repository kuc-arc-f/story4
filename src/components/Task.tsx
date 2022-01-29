import React from 'react';

type Props = {
  task: any;
};

export default function Task(props: Props) {
  const title = props.task.title;
  const state = props.task.state;
  const id = props.task.id;

  const onArchiveTask = function(id: string){
    console.log("onArchiveTask:" + id);
  }
  const onPinTask = function(id: string){
    console.log("onPinTask:" + id);
  }
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}

/*
  return (
    <div className="list-item">
      <h3>tasks222</h3>
      <input type="text" value={title} readOnly={true} />
    </div>
  );
*/