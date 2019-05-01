import React from "react";
import "./App.css";
import Main from './components/Main';
import FormModal from './components/FormModal';
import * as api from './lib/api';

class App extends React.Component {

  async componentDidMount() {
    const data = await api.getAllBoards();
    const timelineData = data.message.map(item => ({
      title: item.title,
      imageUrl: item.imageUrl,
      date: this.addDays(new Date(item.updated_at), 0),
      text: item.description,
      slideurl: item.slideUrl,
      buttonText: 'Show Slides',
      onClick: () => {
        window.open(`${item.slideUrl}`);
      }
    }));
    console.log(timelineData);
    this.setState({
      data: timelineData
    });
  }

  addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

  state = {
    modal: false,
    formData: {
      title: '',
      imageUrl: '',
      description: '',
      slideUrl: '',  
    },
    data: []
};

onChangeForm = (e) => {
  const { name } = e.target;
  const { value } = e.target;
  this.setState({
    formData: {
      ...this.state.formData,
      [name]: value
    }
  })
};
onSubmitForm = (e) => {
  e.preventDefault();
  const { title, imageUrl, description, slideUrl} = this.state.formData;
  this.createData(title, imageUrl, new Date('2019-05-01'), description, slideUrl);
  api.postBoard(title, imageUrl, slideUrl, description);

}

createData = (title, imageUrl, date, description, slideurl) => {
    const { data } = this.state;
    const timelineData = [
    ...data,     
    {
        title,
        imageUrl,
        date: this.addDays(new Date(date), 0),
        text: description,
        buttonText: 'Go Slide',
        onClick: () => {
            window.open(slideurl);
        }
    }];
    this.setState({ data : timelineData});
}

  handlemodalChange = (e) => {
    const { modal } = this.state;
      this.setState({
        modal: !modal
      });
  }

  render() {
    const { data, modal, formData } = this.state;
    return (
      <div className="App">
        <Main events={data}/>
        <FormModal handlemodalChange={this.handlemodalChange} modal={modal} formData={formData} onChangeForm={this.onChangeForm} onSubmitForm={this.onSubmitForm}/>
      </div>
    );
  }
}



export default App;
