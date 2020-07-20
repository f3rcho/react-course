import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { searchVideo } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { isHome } = props;
  // const hasSearch = Object.keys(searchList).length > 0;

  const inputStyle = classNames('input', {
    isHome,
  });

  const handleInput = (event) => {
    props.searchVideo(event.target.value);
  };

  // const searchStyle = classNames('categories', {
  //     isSearch,
  // })
  // console.log(searchList);

  return (
    <div>
      <section className='main'>
        <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
        <input
          type='text'
          className={inputStyle}
          onChange={handleInput}
          placeholder='Buscar...'
        />
      </section>
    </div>
  );
};
// const mapStateToProps = state => {
//     return {
//         searchList: state.searchList,
//     }
// }

const mapDispatchToProps = {
  searchVideo,
};

export default connect(null, mapDispatchToProps)(Search);
