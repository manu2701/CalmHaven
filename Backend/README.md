# CalmHaven_v1 

notion : https://morning-canopy-2f0.notion.site/CalmHaven_v1-140518082eee806cbe15d6aaec2b4cc9


## Structure Breakdown:
1. **Table of Contents**: Provides a clickable list of sections.
2. **Project Overview**: Describes the purpose of the project.
3. **Backend**: Details the backend functionality and endpoints.
4. **Steps to Access the Codebase**: Provides setup instructions for developers.
5. **Contact Me**: A way to reach out for questions or contributions.


## Table of Contents
- [Project Overview](#project-overview)
- [Backend](#backend)
- [Steps to Access the Codebase](#steps-to-access-the-codebase)
- [Contact Me](#contact-me)

These links will take you to the corresponding sections when clicked.

---


## Project Overview

**CalmHaven_v1** an online platform aimed at helping individuals dealing with PTSD (Post-Traumatic Stress Disorder). The site provides a range of personalized resources, including a chatbot for instant support, educational blog articles, inspiring stories, resources such as YouTube videos, an exercise regimen, and a structured diet plan to enhance mental health. This initiative intends to equip users with tools to cope with their symptoms and enhance their overall quality of life.

Currently, the platform includes:

- **Chatbot**: A conversational AI designed to provide immediate support and coping strategies for PTSD.
- **Blogs**: Informative articles about PTSD, self-care, coping techniques, and mental health tips to guide users in their healing journey.
- **Exercise Plan**: A feature to organise physical activity, promoting a healthy lifestyle and stress relief through exercise
- **Diet Plan**: A dynamic weekly diet plan to encourage healthy eating habits, which are important for mental and physical well-being.
- **Progress Tracker**: A feature that allows users to monitor their progress and celebrate small wins in their mental health journey.

This project is still under development, with several additional features planned for future releases. The focus is on providing a safe and supportive space for users who are dealing with PTSD.


## Backend

### API’s




- Users :
    
    
    - http://localhost:8000/api/Users/Login
        
        POST:
        
        ```json
        {
          "name": "mohith",
          "password": "123"
        }
        ```
        
        Response :
        
        ```json
        { 
          "msg" : "Logged in Successfully" ,
          "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibW9oaXRoIn0.BA-741VBIYXE6pMxd-xsEcSK8GA91Ol1mXFv0BnID1c"
        }
        ```
        
    - http://localhost:8000/api/Users/Signup
        
        POST:
        
        ```json
        {
          "name": "mohith",
          "password": "123",
          "surveyres" : 3 //any number btwn (0-8)
        }
        ```
        
        Response :
        
        ```json
        {
        	"msg" : "User created successfully at 17th November"
        	"token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibW9oaXRoIn0.BA-741VBIYXE6pMxd-xsEcSK8GA91Ol1mXFv0BnID1c"
        }
        ```
        
    
    > store the JWT token in Local Storage  with JavaScript
    > 

- Auth Middleware :
    
    
    > add Authorization in header with Bearer before the token
    > 
    
    ```
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFuaXNoYSIsImlhdCI6MTczMTgxMDUyMSwiZXhwIjoxNzMxODE0MTIxfQ.oOp9cDPKB8pl5UeRG3AExPPM0lm9Axq5LKnj9RTRcIw
    ```
    
    Response : 
    
    ```
    it adds the username into “req.Bearing_User” which can be accessed by the next routes
    ```
    

- Todo :
    - http://localhost:8000/api/Todo/DietData
        
        GET:
        
        > Users must be logged in. The data array, dynamically generated for each week, should be used to display the diet plan in the frontend.
        > 
        
        ```json
        {
          "msg": "displaying Diet Plan 1",
          "data": [
            {
              "day": "Day 1",
              "breakfast": "Oatmeal with banana",
              "lunch": "Grilled chicken with brown rice",
              "dinner": "Baked salmon with quinoa"
            },
            {
              "day": "Day 2",
              "breakfast": "Greek yogurt with berries",
              "lunch": "Turkey and avocado wrap",
              "dinner": "Shrimp and vegetable stir-fry"
            },
            {
              "day": "Day 3",
              "breakfast": "Scrambled eggs with whole wheat toast",
              "lunch": "Chicken Caesar salad",
              "dinner": "Grilled steak with roasted vegetables"
            },
            {
              "day": "Day 4",
              "breakfast": "Avocado toast with poached eggs",
              "lunch": "Chicken and quinoa bowl",
              "dinner": "Baked chicken with sweet potato"
            },
            {
              "day": "Day 5",
              "breakfast": "Smoothie bowl with banana and almond milk",
              "lunch": "Grilled chicken with mixed greens salad",
              "dinner": "Shrimp and pasta with marinara sauce"
            },
            {
              "day": "Day 6",
              "breakfast": "Omelette with vegetables",
              "lunch": "Turkey and cheese sandwich",
              "dinner": "Grilled chicken with roasted broccoli"
            },
            {
              "day": "Day 7",
              "breakfast": "Breakfast burrito with scrambled eggs and sausage",
              "lunch": "Chicken quesadilla",
              "dinner": "Baked chicken with mashed potatoes"
            }
          ]
        }
        ```
        
    - http://localhost:8000/api/Todo/DietProgress
        
        PUT:
        
        > make a call to this endpoint whenever a checkbox is ticked with the following body (0 for less than 3 ticks, 1 for less than 7 ticks and 2 for 7 ticks)
        > 
        
        ```json
        {
        	"progressBar" : 2 
        }
        ```
        
        Response :
        
        > The database updates the progressBar for the current week.
        > 
        
        ```json
        {
            "msg": "updated successfully"
        }
        ```


    - http://localhost:8000/api/Todo/ExerciseData
        
        GET:
        
        
        
        ```json
        {
          "msg": "displaying Poor Sleep Quality + Low Stress Level",
          "data": [
            {
              "day": "Day 1",
              "morning": "Cat-Cow Pose",
              "evening": "Light Walking"
            },
            {
              "day": "Day 2",
              "morning": "Child's Pose",
              "evening": "Neck and Shoulder Stretches"
            },
            {
              "day": "Day 3",
              "morning": "Seated Forward Fold",
              "evening": "Breathing Exercises (4-7-8 Method)"
            },
            {
              "day": "Day 4",
              "morning": "Reclined Bound Angle Pose",
              "evening": "Gentle Stretching"
            },
            {
              "day": "Day 5",
              "morning": "Sphinx Pose",
              "evening": "Guided Meditation"
            },
            {
              "day": "Day 6",
              "morning": "Happy Baby Pose",
              "evening": "Nature Walk"
            },
            {
              "day": "Day 7",
              "morning": "Legs-Up-The-Wall Pose",
              "evening": "Body Scan Relaxation"
            }
          ]
      }   
        ```
    - http://localhost:8000/api/Todo/ExerciseProgress
        
        PUT:
        
        > make a call to this endpoint whenever a checkbox is ticked with the following body (0 for less than 3 ticks, 1 for less than 7 ticks and 2 for 7 ticks)
        > 
        
        ```json
        {
        	"EprogressBar" : 2 
        }
        ```
        
        Response :
        
        > The database updates the  EprogressBar for the current week.
        > 
        
        ```json
        {
            "msg": "updated successfully"
        }
        ```
        

## Steps to access the codebase

1. run the following in terminal
    
    **`git clone https://github.com/RealMohith/CalmHaven_v1`**
    
    ` cd Backend `
    
    `npm install`
    
2. add the following files inside Backend Folder
    
    .env  
    
    ```
    MONGODB_URL = <your mongoose url>/CalmHavenDB
    PORT = <url desired port preferably 8000 >
    JWT_SECRET_KEY = <some string>
    
    //replace <> with your values
    ```
    

1. run the following in terminal
    
    `node server.js`





## Contact Me

If you have any questions, suggestions, or would like to contribute to the project, feel free to reach out to me:

- **Email**: mohithgowdait@gmail.com
- **GitHub**: [https://github.com/RealMohith](https://github.com/RealMohith)
- **LinkedIn**: [https://www.linkedin.com/in/mohithgowdar](https://linkedin.com/in/mohithgowdar)

I'd love to hear from you!
