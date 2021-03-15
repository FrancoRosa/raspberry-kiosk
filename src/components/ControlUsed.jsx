import { useEffect } from 'react';
import { connect } from 'react-redux';

const ControlUsed = ({ control }) => {
  
  useEffect(()=>{console.log('XX>> ',control)},[])

  return(
    <p className="control-used">
      {control}
    </p>
  )
}

const mapStateToProps = state => ({
  control: state.control,
})

export default connect(mapStateToProps)(ControlUsed);
