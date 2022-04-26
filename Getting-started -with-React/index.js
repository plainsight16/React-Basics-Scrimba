'use strict';

const e = React.createElement;

class likeButton extends React.Component {
    constructor(props){
        super(props)
        this.liked = { liked: false};
    }
    render() {
        if (this.state.liked) return `You're in love.`;
    
        return e(
            'button',
            {onClick: () => this.setState({liked: true})},
            "Like"
        );
    }
}

const divContainer = document.getElementById("root");
const root = ReactDOM.createRoot(divContainer);

root.render(e(likeButton));