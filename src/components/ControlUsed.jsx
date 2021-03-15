import { useEffect } from 'react';
import { connect } from 'react-redux';

const ControlUsed = ({ control }) => {
  
  useEffect(()=>{
    console.log('XX>> ',control);
    let container = document.querySelector('.control-used');
    container.classList.remove('hidden');
  },[])

  return(
    <p className="control-used">
      {control === "a" && String.fromCodePoint(8592)}
      {control === "d" && String.fromCodePoint(8594)}
      {control === "w" && String.fromCodePoint(8593)}
      {control === "s" && String.fromCodePoint(8595)}
      {control === "o" && String.fromCodePoint(8617)}
      {control === "p" && String.fromCodePoint(8618)}
    </p>
  )
}

const mapStateToProps = state => ({
  control: state.control,
})

export default connect(mapStateToProps)(ControlUsed);
