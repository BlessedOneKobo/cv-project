import { Component } from "react";

import GeneralInfoSection from "./components/GeneralInfoSection";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      editMode: {
        generalInfo: true,
      },
      generalInfoData: {
        name: "",
        email: "",
        phoneNumber: "",
      },
      hasCreatedCv: false,
      canUpdateCv: false,
    };

    this.saveGeneralInfo = this.saveGeneralInfo.bind(this);
    this.onGeneralInfoChange = this.onGeneralInfoChange.bind(this);
    this.determineSubmitButtonText = this.determineSubmitButtonText.bind(this);
    this.onCvSubmitButtonClick = this.onCvSubmitButtonClick.bind(this);
  }

  saveGeneralInfo(event) {
    event.preventDefault();
    console.log("saveGeneralInfo");
  }

  onGeneralInfoChange({ inputName, newValue }) {
    this.setState((state) => {
      return {
        generalInfoData: {
          ...state.generalInfoData,
          [inputName]: newValue,
        },
      };
    });
  }

  onCvSubmitButtonClick() {
    if (this.state.canUpdateCv) {
      console.log("update cv");
      return;
    }

    if (this.state.hasCreatedCv) {
      this.setState({
        editMode: { generalInfo: true },
        canUpdateCv: true,
      });
      return;
    }

    if (this.validateData()) {
      this.setState({
        hasCreatedCv: true,
        canUpdateCv: false,
        editMode: { generalInfo: false },
      });
    }
  }

  validateData() {
    return this.validateGeneralInfoData();
  }

  validateGeneralInfoData() {
    const hasValues = Object.values(this.state.generalInfoData).every(
      (value) => value
    );
    return hasValues;
  }

  determineSubmitButtonText() {
    if (this.state.canUpdateCv) {
      return "Update";
    }

    if (this.state.hasCreatedCv) {
      return "Edit";
    }

    return "Create";
  }

  render() {
    return (
      <div className="App">
        <h1>CV Application</h1>

        <GeneralInfoSection
          editMode={this.state.editMode.generalInfo}
          canSave={this.state.hasCreatedCv}
          cvData={this.state.generalInfoData}
          onGeneralInfoChange={this.onGeneralInfoChange}
          saveGeneralInfo={this.saveGeneralInfo}
        />

        <div className="cvSubmitButton">
          <button type="button" onClick={this.onCvSubmitButtonClick}>
            {this.determineSubmitButtonText()}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
