export default function Variable({ name, value, setValue }) {
  return (
    <div className="row d-flex flex-row gap-1 justify-content-center align-items-center m-2 p-2 rounded border ">
      <div className="fs-3 fw-bold">{name}</div>
      <div className="col-12 d-flex flex-row gap-3 justify-content-center align-items-center p-3">
        <button
          className="btn btn-danger col-3"
          onClick={() => setValue(value - 1)}
        >
          -
        </button>
        <div className="col-3 fs-2">{value}</div>
        <button
          className="btn btn-success col-3"
          onClick={() => setValue(value + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
