class Form extends React.Component {
    state = {
        city: "",
        text: "",
        isLoved: true,
        number: "3"
    }

    handleChange = e => {
        console.log(e.target.type);
        if (e.target.type === "checkbox") {
            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    render() {
        return (
            <div>
                <label>
                    Podaj miasto
            <input name="city" value={this.state.city} onChange={this.handleChange} type="text" />
                </label>
                <br />
                <label>
                    Napisz coś o tym mieście
                    <textarea name="text" value={this.state.text} onChange={this.handleChange}></textarea>
                </label>
                <br />
                <label>
                    Czy lubisz to miasto?
                <input name="isLoved" type="checkbox" checked={this.state.isLoved} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Ile razy byłeś w tym mieście?
                <select name="number" value={this.state.number} onChange={this.handleChange}>
                        <option value="0">1</option>
                        <option value="1">2</option>
                        <option value="2">3</option>
                        <option value="3">4</option>
                        <option value="more">Więcej</option>
                    </select>
                </label>
            </div>
        )
    }
}

ReactDOM.render(<Form />, document.getElementById('app'))