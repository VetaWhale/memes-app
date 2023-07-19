class View {
  constructor({ onNewMem }) {
    this.ERROR_TEXT = "Слишком длинный текст";

    this.listNode = document.querySelector("#mems-name");
    this.inputTopText = document.querySelector("#input-top-text");
    this.inputBottomText = document.querySelector("#input-bottom-text");
    this.textTop = document.querySelector("#top-text");
    this.textBottom = document.querySelector("#bottom-text");
    this.previewMemNode = document.querySelector("#preview-mem");
    this.pictureMemNode = document.querySelector("#picture-mem");
    this.errorTopText = document.getElementById("error-top-text");
    this.errorBottomText = document.getElementById("error-bottom-text");

    this.onNewMem = onNewMem;

    this.listNode.addEventListener("change", this._handleSelectMem);
    this.inputTopText.addEventListener("keyup", this._handleTopText);
    this.inputBottomText.addEventListener("keyup", this._handleBottomText);
  }

  renderMemsList(memes) {
    this.memHTML = "";
    memes.forEach((memName) => {
      this.memHTML += `
                <option id="memName" value="${memName}">${memName}</option>
            `;
    });
    this.listNode.innerHTML = this.memHTML;
  }

  renderImgMem(url) {
    this.pictureMemNode.setAttribute("src", url);
  }

  getSelectMem() {
    return this.listNode.value;
  }

  _handleSelectMem = () => {
    const memUrl = this.onNewMem(this.getSelectMem());

    this.renderImgMem(memUrl);
    this._clearTextMem();
  };

  _renderTopText = (text) => {
    this.textTop.innerText = text;
  };
  _renderBottomText = (text) => {
    this.textBottom.innerText = text;
  };

  _renderErrorTopText = (error) => {
    this.errorTopText.innerText = error;
  };
  _renderErrorBottomText = (error) => {
    this.errorBottomText.innerText = error;
  };

  _handleTopText = () => {
    const text = this.inputTopText.value;

    if (text.length >= 50) return this._renderErrorTopText(this.ERROR_TEXT);

    this._renderTopText(text);
    this._renderErrorTopText("");
    
  };
  _handleBottomText = () => {
    const text = this.inputBottomText.value;

    if (text.length >= 50) return this._renderErrorBottomText(this.ERROR_TEXT);

    this._renderErrorBottomText("");
    this._renderBottomText(text);
  };

  _clearTextMem = () => {
    this.inputTopText.value = "";
    this.inputBottomText.value = "";
    this.textTop.innerText = "";
    this.textBottom.innerText = "";
  };
}
