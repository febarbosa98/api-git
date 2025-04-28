"use client";

import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

function Input({ onUsernameChange, userData }: { onUsernameChange: (username: string) => void; userData: any }) {
    const [localUsername, setLocalUsername] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalUsername(e.target.value);
    };

    const handleButtonClick = () => {
        onUsernameChange(localUsername); // Passa o valor atualizado para o componente pai ao clicar no botão
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleButtonClick(); // Chama a função de busca ao pressionar Enter
        }
    };

    return (
        <div className="flex flex-col items-center p-10 bg-gray-900 w-291 h-180 rounded-lg shadow-lg">
            <div className="flex flex-row items-center mb-4 gap-7">
                <img src="/git.png" alt="GitHub Logo" width={100} height={"auto"} className="rounded-[50%] mb-4" />
            <h1 className="text-5xl" >Perfil <strong>GitHub</strong></h1>
            </div>
            <div className='flex items-center border border-gray-300 rounded w-64"'>

            <input
                type="text"
                placeholder="Digite o nome do usuário"
                className="flex-grow p-2 outline-none "
                value={localUsername}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                />
            <button
                className="bg-sky-500 text-white rounded p-2 hover:bg-sky-600"
                onClick={handleButtonClick}
                >
                <CiSearch className='w-10 h-6 text-sm ' />
            </button>
                </div>
            {userData && (
                <div className="mt-4 bg-white p-4 rounded shadow-md flex items-center text-gray-900 w-200 h-100">
                    <img src={userData.avatar_url} alt="Avatar" width={300} height={"auto"} className="rounded-[50%] border-3 border-sky-500 " />
                    <div className="flex flex-col align-items-center justify-center ml-4">

                    <h2 className="text-center text-2xl text-sky-700 mb-2 ">{userData.name}</h2>
                    <p className="">{userData.bio}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default Input;