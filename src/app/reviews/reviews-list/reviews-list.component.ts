// reviews-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/Models/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewService.getAllReviews().subscribe(
      (data: Review[]) => {
        this.reviews = data;
      },
      (error: any) => {
        console.error('Error fetching reviews:', error);
      }
    );
  }
}
