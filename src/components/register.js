import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/postActions';

class Register extends Component {

    onChange(e){
       this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const data = {
            email : this.state.email,
            password: this.state.password
        }

        fetch('http://localhost:3001/user',{
            method:'POST',
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {

        // const posties = this.state.items.map(data => {
        //     return (
        //         <div key={data.id}>
        //             <h3>{data.title}</h3>
        //         </div>
        //     )
        // });


        return (
            <div>
                <form>
                    <label>Email</label><br/>
                    <input type="email" name="email"   /><br/>
                    <label>Password</label><br/>
                    <input type="password" name="password"  /><br/>
                    <input type="submit" value="Submit"   />
                </form>
            </div>
        )
    }
}

export default connect(null,{ fetchUsers })(Register);