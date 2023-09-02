import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiServiceService) {}

  bannerResult: any = [];
  trendingMoviesResult: any = [];
  actionMoviesResult: any = [];
  adventureMoviesResult: any = [];
  animationMoviesResult: any = [];
  comedyMoviesResult: any = [];
  documentaryMoviesResult: any = [];
  scienceMoviesResult: any = [];
  thrillerMoviesResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceMovie();
    this.thrillerMovie();
  }

  // banner data
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      // console.log(result,"bannerdata#");
      this.bannerResult = result.results;
    })
  }

  // trending Movies data
  trendingData() {
    this.service.trendingMoviesApiData().subscribe((result) => {
      // console.log(result,"trending");
      this.trendingMoviesResult = result.results;
    })
  }
  
  // action
  actionMovie(){
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMoviesResult = result.results;
    })
  }

  // adventure
  adventureMovie(){
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMoviesResult = result.results;
    })
  }

  // animation
  animationMovie(){
    this.service.fetchAnimationMovies().subscribe((result) =>{
      this.animationMoviesResult = result.results;
    })
  }

  // comedy
  comedyMovie(){
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMoviesResult = result.results;
    })
  }

  // documentary
  documentaryMovie(){
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMoviesResult = result.results;
    })
  }

  // science
  scienceMovie(){
    this.service.fetchScienceMovies().subscribe((result) => {
      this.scienceMoviesResult = result.results;
    })
  }

  // thriller
  thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMoviesResult = result.results;
    })
  }

}
