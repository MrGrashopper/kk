import {useState} from 'react'
import {lalezar} from '../../styles'
import {encrypt} from '../utils'

type Props = {
    setHasAccess: React.Dispatch<React.SetStateAction<boolean>>
}

const EnterMemberArea = ({setHasAccess}: Props) => {
    const [tokens, setTokens] = useState('')
    const setEncryptedCookie = (cookieName, tiers) => {
        const encryptedTiers = encrypt(JSON.stringify(tiers))
        localStorage.setItem(cookieName, encryptedTiers)
    }

    const handleSubmit = async () => {
        const tokenArray = tokens.split(',').map(t => t.trim())
        const res = await fetch(`/api/enter?tokens=${tokenArray.join(',')}`)
        if (res.status === 200) {
            const data = await res.json()
            if (data.tiers && data.tiers.length > 0) {
                setEncryptedCookie('cookie-kk-member', data.tiers)
                setHasAccess(true)
                window.location.href = '/member'
            } else {
                alert('Ungültiger Zugang')
            }
        } else {
            alert('Ungültiger Zugang')
        }
    }

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <div className={lalezar.className}>
                <h3 className="text-3xl text-primary text-center">
                    Login für den Mitgliederbereich
                </h3>
            </div>
            <p
                className={
                    'md:mx-20 lg:mx-32  m-3 lg:m-10 text-primary text-2 text-center'
                }>
                Du hast per E-Mail den Zugangscodes von uns bekommen. Falls du
                mehrere Codes hast, einfach durch Komma trennen.
            </p>
            <div className="mx-3 md:mx-20 lg:mx-32  m-3 lg:m-10 bg-base-300 p-10 shadow-xl">
                <input
                    className="text-center w-full p-4 mb-4 rounded bg-base-100"
                    type="text"
                    value={tokens}
                    onChange={e => setTokens(e.target.value)}
                    placeholder="1234aaaa, 5678bbbb"
                />
                <button
                    className="btn btn-secondary w-full border-white/10"
                    onClick={handleSubmit}>
                    Enter
                </button>
            </div>
        </div>
    )
}

export default EnterMemberArea
