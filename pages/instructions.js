import Link from 'next/link';
import React from 'react';


function instructions() {
    return (
        <div className="
            p-10
            ">
                <h1 className="
                    font-bold">
                        Instructions
                </h1>

                <br/>

                <p className="text-gray-500">
                    1. This is a facebook clone where you can sign in with your facebook account.                    
                </p>
                <p className="pl-10">
                    (the <strong>facebook</strong> account is only used for retriving name, profile photo<br/>
                and email id) - <strong>login details are not saved unless... you've posted here...</strong>
                </p>
                <br/>
                <p className="text-gray-500">
                    2. Only the <strong>"to post message along with a photo"</strong> is currently working.<br/>
                    &ensp; &ensp; the rest are default data and non active <strong>ui elements.</strong>
                </p>
                <br/>
                <p className="text-gray-500">
                    3. <strong>DO NOTE THAT...</strong> whatever you post here can be seen by others in this website only<br/>
                    &ensp; &ensp; this won't be posted in your actual facebook account.<br/>
                </p>
                <br/>
                <p>
                    Posts can't be deleted by the user(for now...), you can request below for deleting you data from the link below
                </p>
                <Link href="https://www.aswinremesan.com/" >
                    <p className="text-semibold text-blue-500">
                        https://www.aswinremesan.com/
                    </p> 
                </Link>
                <p className="text-green-500">and navigate to the contact section</p>


                <br/>
                <br/>
                <br/>
                
                <h1 className="
                    font-bold">
                        To SIGN OUT...
                </h1>
                <p>
                    Just click on your profile pic on the header menu(right side - top)
                </p>
            
        </div>
    )
}

export default instructions
