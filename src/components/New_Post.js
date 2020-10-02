import React from 'react';

class NewPost extends React.Component {
    constructor(props) {
        super(props); 
            this.state = {
                posts: []
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

        }
        handleChange = (event) => {
            this.setState({[event.target.name]: event.target.value});
        }
        handleSubmit = (event) => {
            event.preventDefault();
            fetch("http://127.0.0.1:8000/api/roastboast/",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then(res => res.json())
            .then(data => this.setState ({posts:data}))
            window.location.reload()
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <select onChange={this.handleChange}>
                            <option name='choices' value={this.state.choices}>Boast</option>
                            <option name='choices' value={this.state.choices}>Roast</option>
                        </select>
                        Post:
                        <textarea name='body' value={this.state.body} onChange=
                        {this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            );
        }
}

export default NewPost;