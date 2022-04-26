'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
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

const domContainer = document.querySelector("#like_btn_container")
const root = ReactDOM.createRoot(domContainer);

root.render(e(LikeButton), domContainer);
//ReactDom.render(<h1>You're in love</h1>, document.getElementById('root'));