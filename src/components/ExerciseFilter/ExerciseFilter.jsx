import './ExerciseFilter.css'

export default function ExerciseFilter({ equipment, target, bodyPart, updateFilters }) {
  const equipmentFilters = equipment.map((eqp, idx) => (
    <div onClick={(e) => updateFilters(e)} key={idx} className="filterBtn">{eqp}</div>
  ));
  const targetFilters = target.map((eqp, idx) => (
    <div onClick={(e) => updateFilters(e)} key={idx} className="filterBtn">{eqp}</div>
  ));
  const bodyPartFilters = bodyPart.map((eqp, idx) => (
    <div onClick={(e) => updateFilters(e)} key={idx} className="filterBtn">{eqp}</div>
  ));

  return (
    <section className='exerciseFilterContainer'>
      <div className="filterCategory">{equipmentFilters}</div>
      <hr />
      <div className="filterCategory">{bodyPartFilters}</div>
      <hr />
      <div className="filterCategory">{targetFilters}</div>
    </section>
  )
}