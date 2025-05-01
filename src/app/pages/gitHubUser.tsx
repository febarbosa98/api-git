"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GitHubUser({ username, setUserData }: { username: string; setUserData: (data: any) => void }) {
    const [repos, setRepos] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    

    useEffect(() => {
        if (!username) return;

        const fetchUserData = async () => {
            try {
                const [userResponse, reposResponse] = await Promise.all([
                    axios.get(`https://api.github.com/users/${username}`),
                    axios.get(`https://api.github.com/users/${username}/repos`)
                ]);

                setUserData(userResponse.data); // Atualiza os dados do usuário no componente pai
                setRepos(reposResponse.data);
                setError(null);
            } catch (err: any) {
                if (err.response && err.response.status === 404) {
                    setError('Usuário não encontrado no GitHub.');
                } else {
                    setError('Erro ao buscar dados do GitHub.');
                }
                console.error(err);
            }
        };

        fetchUserData();
    }, [username, setUserData]);

    

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return null; // Não renderiza nada diretamente
}

export default GitHubUser;