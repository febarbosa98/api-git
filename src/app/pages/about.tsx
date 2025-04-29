"use client";

import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

function About({ onUsernameChange, userData }: { onUsernameChange: (username: string) => void; userData: any }) {
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
        <div className="flex flex-col items-center p-10  bg-gray-900 md:w-291  md:h-180  w-90 h-full rounded-lg shadow-lg">
            <div className="flex flex-row items-center  mb-4 gap-7">
                <img src="/git.png" alt="GitHub Logo" width={100} height={"auto"} className="rounded-[50%] mb-4" />
            <h1 className="text-5xl" >Perfil <strong>GitHub</strong></h1>
            </div>
            <div className='flex items-center border border-gray-300 rounded md:w-67 w-full'>

            <input
                type="text"
                placeholder="Digite o nome do usuário"
                className="flex-grow p-2 outline-none "
                value={localUsername}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                />
            <button
                className="bg-sky-500 text-white p-2 rounded hover:bg-sky-600"
                onClick={handleButtonClick}
                >
                <CiSearch className='w-6 h-6 ' />
            </button>
                </div>
            {userData && (
                <div className="flex-col md:flex-row mt-6 bg-white p-10 rounded shadow-md flex  items-center text-gray-900 md:w-200  md:h-100 w-full h-full ">
                    <img
                        src={userData.avatar_url}
                        alt="Avatar"
                        className="md:w-70 md:h-auto w-32 h-32 rounded-full border-4 border-sky-500 mb-4 sm:mb-0 sm:mr-4"
                    />
                    <div className="flex flex-col align-items-center justify-center ml-4">

                    <h2 className="text-center md:text-3xl text-xl text-sky-700 mb-2 ">{userData.name}</h2>
                    <p className="md:text-lg text-sm">{userData.bio}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default About;