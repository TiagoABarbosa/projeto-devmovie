package com.devsuperior.devmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devsuperior.devmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	
	

}
