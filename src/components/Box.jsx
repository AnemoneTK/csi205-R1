export default function Box({ name, value, setValue }) {
  return (
    <div className="col d-flex flex-column align-items-center p-3 rounded border  gap-3">
      <div className="fw-bolder badge bg-primary fs-3 fw-bold"></div>
      <div className="d-flex flex-column align-items-center  justify-content-center gap-2">
        <div className="fs-4 fw-bold">{name}</div>
        <div className="col-12 d-flex flex-row align-items-center  justify-content-center gap-2">
          <button
            className="btn btn-danger"
            onClick={() => setValue(value - 1)}
          >
            -
          </button>
          <div className="col-7">
            <input
              type="number"
              className="form-control text-center fs-4"
              value={value}
              onChange={(element) => setValue(parseFloat(element.target.value))}
            />
          </div>
          <button
            className="btn btn-success"
            onClick={() => setValue(value + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
