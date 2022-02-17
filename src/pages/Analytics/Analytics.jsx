import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import Controls from './Controls'
import s from './Analytics.module.scss'
const Analytics = ({ value, onincrement, ondecrement, step }) => {
  return (
    <div className={s.analytics}>
      <h2>COUNTER REDUX TEST</h2>
      {value}
      <Controls
        step={step}
        onincrement={() => onincrement(step)}
        ondecrement={() => ondecrement(step)}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onincrement: (value) => dispatch(actions.increment(value)),
    ondecrement: (value) => dispatch(actions.decrement(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analytics)
