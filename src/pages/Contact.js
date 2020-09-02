import React from 'react';


const Contact = () => {
    return (
       
            <div>
                <h1 class="text-info myHeader">Contact</h1>
                    <hr></hr>
                <form class="w-75">
                    <div class="form-group">
                        <label for="nameInput">Name </label>
                        <input type="text" class="form-control" id="nameInput" placeholder="Your Name"
                            title="Please enter your first and last name"></input>
                    </div>
                    <div class="form-group">
                        <label for="emailAddressInput">Email </label>
                        <input type="email" class="form-control" id="emailAddressInput" placeholder="name@email.com"
                            title="Please enter your email address"></input>
                    </div>
                    <div class="form-group">
                        <label for="messageTextAreaInput">Message </label>
                        <textarea class="form-control" id="messageTextAreaInput" rows="5"></textarea>
                    </div>
                    <button type="submit" class="btn theme-submit float-right" placeholder="Enter you message here"
                        title="Please enter your message">Submit</button>
                </form>
            </div>
      
    )
}

export default Contact