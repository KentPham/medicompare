import React, { Component } from 'react';
//import {withRouter} from "react-router-dom";
//import axios from 'axios'

class Home extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Drug 1</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Advil" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Drug 2</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Tylenol" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}

export default Home;
