"use client"
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Repos {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

async function getRepositories(username: string): Promise<Repos[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const repositories = await response.json() as Repos[];
    return repositories;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
}

export default function Projects() {
  const [repos, setRepos] = useState<Repos[]>([]);
  const username = "JonathanAlfaH"; // Puedes configurar esto dinámicamente si es necesario

  useEffect(() => {
    async function fetchData() {
      const repositories = await getRepositories(username);
      setRepos(repositories);
    }

    fetchData();
  }, [username]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div >
      <div className=" h-screen justufy-center bg-teal-50" >
      <div className='flex justify-center'>
        <h1 className="text-2xl text-teal-500 font-bold mt-10">GitHub Repositorios</h1>
      </div>
      {repos.length === 0 ? (
        <div className='flex justify-center'>
        <p className='text-gray-500'>No se encontro repositorio.</p>
        </div>
      ) : (
        <Slider {...settings} className='m-20' >
          {repos.map((repo) => (
            <div key={repo.id} className="p-1">
              <div className="h-full  rounded-lg p-4 flex flex-col bg-gray-500 ">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-teal-400 mb-2">
                  {repo.name}
                </a>
                
                <p className="text-white flex-grow text-justify mb-4">{repo.description}</p>

                <div className='flex justify-center'>
                  <a href={repo.html_url} className="text-white hover:text-blue-500 text-sm found-sans">
                  Ver Repositorio
                </a>
                </div>
                <div className='flex justify-center'>
                <a className="text-white hover:text-blue-500 text-sm found-sans" href={repo.html_url+'/archive/refs/heads/main.zip'} >Descargar</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
      </div>
    </div>
  )
}

