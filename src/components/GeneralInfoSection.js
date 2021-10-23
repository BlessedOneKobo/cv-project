import PropTypes from "prop-types";

function GeneralInfoSection(props) {
  const fieldsetElm = (
    <fieldset>
      <legend>
        <h2>General Information</h2>
      </legend>
      <form onSubmit={props.saveGeneralInfo}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={props.cvData.name}
            required
            onChange={(event) =>
              props.onGeneralInfoChange({
                inputName: "name",
                newValue: event.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={props.cvData.email}
            required
            onChange={(event) =>
              props.onGeneralInfoChange({
                inputName: "email",
                newValue: event.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={props.cvData.phoneNumber}
            required
            onChange={(event) =>
              props.onGeneralInfoChange({
                inputName: "phoneNumber",
                newValue: event.target.value,
              })
            }
          />
        </div>

        {props.canSave ? <button type="submit">Save</button> : null}
      </form>
    </fieldset>
  );

  const valueDisplay = (
    <div>
      <h2>General Information</h2>
      <h3>Name</h3>
      <p>{props.cvData.name}</p>
      <h3>Email</h3>
      <p>{props.cvData.email}</p>
      <h3>Phone Number</h3>
      <p>{props.cvData.phoneNumber}</p>
    </div>
  );

  return <div>{props.editMode ? fieldsetElm : valueDisplay}</div>;
}

GeneralInfoSection.propTypes = {
  canSave: PropTypes.bool,
  cvData: PropTypes.object,
  editMode: PropTypes.bool,
  onGeneralInfoChange: PropTypes.func,
  saveGeneralInfo: PropTypes.func,
};

export default GeneralInfoSection;
