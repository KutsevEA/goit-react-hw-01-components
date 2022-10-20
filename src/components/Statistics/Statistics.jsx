import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => { <section className="statistics"> <h2 className="title">{title}</h2>
  <ul>
    <li>
          <span key={stats.id} >{stats.label}</span>
      <span >{stats.percentage}%</span>
    </li>
  </ul>
</section>

};

// Statistics.propTypes = {
// stats : PropTypes.array.isRequired,
// };