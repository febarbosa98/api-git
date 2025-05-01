"use client";

import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

function About({
  onUsernameChange,
  userData,
}: {
  onUsernameChange: (username: string) => void;
  userData: any;
}) {
  const [localUsername, setLocalUsername] = useState("");
  const [repos, setRepos] = useState<any[]>([]);

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

  useEffect(() => {
    if (userData && userData.repos_url) {
      // Faz a requisição para buscar os repositórios
      axios
        .get(userData.repos_url)
        .then((response) => {
          setRepos(response.data); // Armazena os repositórios no estado
        })
        .catch((error) => {
          console.error("Erro ao buscar repositórios:", error);
        });
    }
  }, [userData]);

  return (
    <div className="flex flex-col items-center p-10 bg-gray-900 md:w-291  w-90 h-full rounded-lg shadow-lg">
      <div className="flex flex-row items-center mb-4 gap-7">
        <img
          src="/git.png"
          alt="GitHub Logo"
          width={100}
          height={"auto"}
          className="rounded-[50%] mb-4"
        />
        <h1 className="text-5xl">
          Perfil <strong>GitHub</strong>
        </h1>
      </div>
      <div className="flex items-center border border-gray-300 rounded md:w-67 w-full">
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          className="flex-grow p-2 outline-none"
          value={localUsername}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-sky-500 text-white p-2 rounded hover:bg-sky-600"
          onClick={handleButtonClick}
        >
          <CiSearch className="w-6 h-6" />
        </button>
      </div>
      {userData && (
        <div >
          <div className="flex flex-col md:flex-row mt-8 bg-white p-10 rounded shadow-md m-auto justify-center items-center text-gray-900 md:w-200 md:h-100 w-full h-full">
            <img
              src={userData.avatar_url}
              alt="Avatar"
              className="md:w-70 md:h-auto w-32 h-32 rounded-full border-4 border-sky-500 mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="flex flex-col align-items-center justify-center ml-4">
              <h2 className="text-center md:text-3xl text-xl text-sky-700 mb-2">
                {userData.name}
              </h2>
              <p className="md:text-lg text-sm">{userData.bio}</p>
              <h2 className="text-center md:text-3xl text-xl text-sky-700 mb-2 mt-4">
                Informações
              </h2>
              <p className="md:text-lg text-sm">
                Seguidores: {userData.followers}
              </p>
              <p className="md:text-lg text-sm">
                Seguindo: {userData.following}
              </p>
              <p className="md:text-lg text-sm">
                Repositórios: {userData.public_repos}
              </p>
              <p className="md:text-lg text-sm">
                Localização: {userData.location}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-center md:text-3xl text-xl text-sky-500 my-8">
              Repositórios
            </h2>
            <div className="md:grid md:grid-cols-3 gap-4  items-center justify-center">
              {repos.slice(0, 12).map((repo) => (
                <div
                  key={repo.id}
                  className="bg-white p-4 text-black rounded flex flex-col justify-between shadow-md mb-4 h-30 w-full max-w-md"
                >
                  <h3 className="text-lg font-semibold">{repo.name}</h3>
                  <p>
                    {repo.description
                      ? repo.description.length > 50
                        ? `${repo.description.slice(0, 50)}...` // Limita a 50 caracteres
                        : repo.description
                      : "Sem descrição"}
                  </p>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Ver Repositório
                  </a>
                </div>

              ))}
              <div className="col-span-3 flex justify-center mt-4">
                 <a
            href={`https://github.com/${userData.login}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline text-lg"
        >
            Ver todos os repositórios
        </a>
    </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
