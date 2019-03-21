import React from 'react';

class Tangent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            starting_x_pos: 2,
            ending_x_pos : 0
        }
    }

    handleSubmit() {

    }

    render() {
        return (
          <div className="red">
              <p>
                  {this.props.name}
              </p>
          </div>
        );
    }

}

export default Tangent;