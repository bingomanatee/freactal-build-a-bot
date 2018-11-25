export default ({ state, actions }) => (
  <section>
    <h1>Domo Arigato, {state.robotName}</h1>
    <p>
      Set Robot name:
      <input
        type="text"
        value={state.robotname}
        onChange={(event) => {
          const name = event.target.value;
          actions.setName(name);
        }}
      />
    </p>
  </section>
);
