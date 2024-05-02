export default function FormCreditCard() {
  return (
    <div className="form-container">
      <div className="field-container">
        <label>Nome</label>
        <input id="name" maxLength={20} type="text" className="colorOutline" />
      </div>
      <div className="field-container">
        <label>Número Cartão</label>

        <input
          id="cardnumber"
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          className="colorOutline"
        />
        <svg
          id="ccicon"
          className="ccicon mt-2"
          width="750"
          height="471"
          viewBox="0 0 750 471"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        ></svg>
      </div>
      <div className="field-container">
        <label>Expira em (mm/yy)</label>
        <input
          id="expirationdate"
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          className="colorOutline"
        />
      </div>
      <div className="field-container">
        <label>CVC</label>
        <input
          id="securitycode"
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          className="colorOutline"
        />
      </div>
    </div>
  );
}
