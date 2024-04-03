import { useState } from 'react';
import app from '../../../App.module.scss';
import style from '../../projects/Todo/Todo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { customAlphabet } from 'nanoid';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Todo = () => {
  const [val, setVal] = useState('')
  const [list, setList] = useState([
    { name: 'List item 1', id: 'id1', dateTime: '18:15:46 30.03.2024' },
    { name: 'List item 2', id: 'id2', dateTime: '18:17:47 30.03.2024' },
  ])

  let full = () => {
    let d = new Date();
    let hours =  d.getHours().toString();
    let minutes =  d.getMinutes().toString();
    let seconds =  d.getSeconds().toString();
    let day =  d.getDate().toString();
    let month =  d.getMonth().toString();
    let fullYear =  d.getFullYear().toString();

    if (hours.length === 1) hours = '0' + hours;
    if (minutes.length === 1) minutes = '0' + minutes;
    if (seconds.length === 1) seconds = '0' + seconds;
    if (day.length === 1) day = '0' + day;
    if (month.length === 1) month = '0' + month;
    let fullDate = hours + ':' + minutes + ':' + seconds + ' ' + day + '.' + (month) + '.' + fullYear;
    return fullDate;
  }

  const nanoid = customAlphabet('1234567890abcdef', 10)

  let addItem = () => {
    setList([...list, { name: val, id: nanoid(), dateTime: full() }])
    setVal('')
  }

  let inputChange = e => {
    setVal(e.target.value)
  }

  let handleOnDragEnd = result => {
    if (!result.destination) return;

    const items = Array.from(list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setList(items);
  }

  let deleteItem = (i, v) => {
    setList(list.filter(item => list[v].id !== item.id));
  }

  return (
    <>
      <div className={`${app.container} ${style.container}`}>
        <h2>Todo list</h2>
        <div className={`${app.inner} ${style.inner}`}>
          <div className={`${app.col} ${style.col}`}>
            <input required type='text' value={val ?? ''} onChange={inputChange} placeholder="Add note" />
            <button disabled={ val === '' ? true : false } onClick={() => addItem()} className={`${app.btn} ${style.btn}`}>Add</button>
          </div>
        </div>
        <div className={`${app.inner} ${style.inner}`}>
          <div className={`${app.col} ${style.col}`}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId='list'>
                {(provided) => (
                  <div className={style.todo} {...provided.droppableProps} ref={provided.innerRef}>
                    {
                      list.map((i, v) => { // JSON.parse(localStorage.getItem('list'))
                        return (
                          <Draggable key={i.id} draggableId={i.id} index={v}>
                            {(provided) => (
                              <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={style.item}>
                                <div className={style.flex}>
                                  <span>{ i.name }</span>
                                  <div className={style.edit}>
                                    {/* <span className={style.pencil}>
                                      <FontAwesomeIcon icon={faPencil} />
                                    </span> */}
                                    <span className={style.trash} onClick={() => {deleteItem(i, v)}}>
                                      <FontAwesomeIcon icon={faTrash} />
                                    </span>
                                  </div>
                                </div>
                                <p className={style.date}>{ i.dateTime }</p>
                              </div>
                            )}
                          </Draggable>
                        )
                      })
                    }
                    { provided.placeholder }
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo