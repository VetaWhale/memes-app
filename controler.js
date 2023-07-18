class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View({
      onNewMem: this.handleViewMemsChanged
    });

    this.api = new API();
  }

  init() {
    this.api.fetchMems().then((response) => {
      if (!response.success) {
        alert("Ошибка получения данных!");
        return;
      }
      const memes = response.data.memes;
      this.model.setMems(memes);
      this.view.renderMemsList(this.model.getMemesName());
      this.view.renderImgMem(this.model.getMemesUrl(this.view.getSelectMem()))
    });
  }

  handleViewMemsChanged = (memName) => {
    const memUrl = this.model.getMemesUrl(memName);
    return memUrl;
  }
}
