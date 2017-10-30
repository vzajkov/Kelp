import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  update(filter) {
    return e => {
      debugger
      if (e.currentTarget.checked) {
        debugger
          return this.props.props.updateFiltering(filter, true);
      } else {
         debugger
         return this.props.props.updateFiltering(filter, false);
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    debugger
    return (
      <div>

        <nav className="navbar">
          <form className="search-bar" onSubmit={this.handleSubmit}>
            <div className="preferencesFilter">
            <input type="checkbox" name="Smoking?" value="true" onChange={this.update('smoking')}/>
            Smoking <br/>
          <input type="checkbox" name="Parking?" value="true" onChange={this.update('parking')}/>
              Has Parking <br/>
            <input type="checkbox" name="Wifi?" value="true" onChange={this.update('wifi')}/>
              Has Wifi <br/>
            <input type="checkbox" name="Takeout?" value="true" onChange={this.update('takeout')}/>
              Takeout <br/>
          </div>

          <div className = "priceFilter">
            <input type="checkbox" name="$" value='$' onChange={this.update('price')}/>
              $ <br/>
            <input type="checkbox" name="$$" value='$$' onChange={this.update('price')}/>
              $$ <br/>
            <input type="checkbox" name="$$$" value='$$$' onChange={this.update('price')}/>
              $$$ <br/>
            <input type="checkbox" name="$$$$" value='$$$$' onChange={this.update('price')}/>
              $$$$ <br/>
          </div>
            <input type="submit" value="Search"/>
          </form>
        </nav>

      </div>
    );
  }


}

export default withRouter(SearchForm);
