import { signIn } from 'next-auth/client';
import Image from 'next/image';
import Link from 'next/link';

function Login() {
    return (

        <div className="grid place-items-center align-middle">

            <Image 
                src="https://links.papareact.com/t4i"
                height={400}
                width={400}
                objectFit="contain"
            />

            <h1 onClick={signIn} 
                className="
                p-5 
                bg-blue-500
                rounded-full
                text-center
                text-white
                cursor-pointer">
                    Login with Facebook
            </h1>

            <h2 className='
                p-3
                text-green-500
                text-center'>
                Disclaimer!!! Facebook Clone <br/>
                Have Fun Around
            </h2>
            <Link className="
                font-semibold text-orange"
                href="/instructions">
                    For further details click here...
            </Link>

        </div>
    )
}

export default Login
