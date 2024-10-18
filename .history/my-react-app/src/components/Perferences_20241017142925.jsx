import React, { useState } from 'react';
import './stylesheets/preferences.css';
import { boolean } from 'zod';

const Preferences = () => {
  
  const categories = [
    {
      title: "Sports & Fitness",
      subCategories: [
        "Running", "Yoga", "Weightlifting", "Hiking", "Swimming",
        "Biking", "Basketball", "Soccer", "Tennis", "Martial Arts",
        "Golf", "Skiing/Snowboarding", "Surfing", "Scuba Diving",
        "Rock Climbing", "Dance", "Badminton", "Table Tennis",
        "Volleyball", "Kayaking"
      ],
    },
    {
      title: "Hobbies",
      subCategories: [
        "Painting/Drawing", "Photography", "Reading Books",
        "Writing", "Playing Instruments", "Listening to Music",
        "Watching Movies", "Cooking/Baking", "Crafting", "Gardening",
        "Woodworking", "Pottery", "DIY Projects", "Learning Languages",
        "Traveling", "Meditation", "Video Games", "Board Games",
        "Puzzles", "Collecting"
      ],
    },
    {
      title: "Entertainment",
      subCategories: [
        "Comedy Shows", "Live Theater", "Concerts", "Movies/Films",
        "TV Shows/Streaming", "Podcasts", "Trivia Nights",
        "Escape Rooms", "Attending Festivals", "Virtual Reality Experiences"
      ],
    },
    {
      title: "Food & Drink",
      subCategories: [
        "Wine Tasting", "Craft Beer Brewing", "Coffee Enthusiast",
        "Mixology", "Vegan/Vegetarian Cooking", "Foodie (Trying New Restaurants)",
        "BBQ & Grilling", "Baking Desserts", "Cooking International Cuisine",
        "Street Food Lover"
      ],
    },
    {
      title: "Outdoors & Adventure",
      subCategories: [
        "Camping", "Fishing", "Stargazing", "Wildlife Watching",
        "Sailing/Boating", "Off-Roading/ATV", "Ziplining",
        "Paragliding", "Hot Air Ballooning", "Caving"
      ],
    },
    {
      title: "Social Preferences",
      subCategories: [
        "Introvert", "Extrovert", "Ambivert", "Attending Social Events",
        "Hosting Gatherings", "Volunteer Work", "Public Speaking",
        "Night Owl", "Early Riser", "Big Family"
      ],
    },
    {
      title: "Lifestyle & Values",
      subCategories: [
        "Fitness Enthusiast", "Healthy Eating", "Eco-Conscious",
        "Minimalist", "Spirituality/Mindfulness", "Political Activism",
        "Sustainability Advocate", "Animal Lover", "Parenting/Children Focused",
        "Philanthropy"
      ],
    },
    {
      title: "Arts & Culture",
      subCategories: [
        "Museums", "Art Galleries", "Historical Sites", "Poetry",
        "Classical Music", "Street Art", "Architecture",
        "Cultural Festivals", "Visiting Libraries", "Writing/Reading Fan Fiction"
      ],
    },
  ];

  const preferencesOfUser = [];

  function storePreferences(subcategory){
    
    if(preferencesOfUser.length < 10)
    {
      let isPresent = false;
      for(let i = 0; i < preferencesOfUser.length; i++){
        if(subcategory === preferencesOfUser[i]){
          alert("You have already selected this category!");
          isPresent = true;
        }
      }
      isPresent ? console.log("Skipping this category") : preferencesOfUser.push(subcategory);
    }
    else{
      alert("You have selected 10 preferences.");
    }
    console.log(preferencesOfUser);
  }

  return (
    <>
      
      <div className="container-preferences">
        <h1>What are your hobbies?</h1>
        <br />
        {categories.map((category, categoryIndex) => (
          <div className="category" >
            <h2 className="category-title">
              {category.title}
            </h2>
            {(
              <div className="button-container">
                {category.subCategories.map((subcategory) => (
                  <button className="blur-button" key="subCategories" onClick={() => storePreferences(subcategory)}>
                    {subcategory}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Preferences;
