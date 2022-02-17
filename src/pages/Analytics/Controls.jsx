const Controls = ({ onincrement, ondecrement, step }) => {
  return (
    <div>
      <button onClick={ondecrement}>
        УМЕНЬШИТЬ НА <b>{step}</b>{' '}
      </button>

      <button onClick={onincrement}>
        УВЕЛИЧИТЬ НА <b>{step}</b>{' '}
      </button>
    </div>
  )
}

export default Controls
