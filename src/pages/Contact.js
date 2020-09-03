import React from 'react';


const Contact = () => {
    return (
       
            <div className="contact">
                <h1 class="text-info myHeader">Contact</h1>
                <i class="fa fa-envelope email" aria-hidden="true"></i>sumnimabhandari@gmail.com
                <i class="fa fa-phone phone" ></i> 320-420-3956
                <hr></hr>
                <div className = "myForm">
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
                        <textarea class="form-control" id="messageTextAreaInput" rows="5" placeholder="Enter you message here"
                        title="Please enter your message"></textarea>
                    </div>
                    <button type="submit" class="btn theme-submit btn-info ">Submit</button>
                </form>
                </div>
            </div>
      
    )
}

export default Contact