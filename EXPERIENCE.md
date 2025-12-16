
## 1. Tool Selection Justification
For this assignment, I utilized **Cursor** and Vibe Coding principles. I chose this approach because it integrates AI directly into the editor, allowing me to focus on the application's logic rather than syntax. The ability to fetch data from APIs (like NASA's) using natural language prompts was the main reason for this choice.

## 2. Development Process
The process was very fluid. I acted more as a "Technical Director" than a traditional coder.
- **Prompts:** My most effective prompt was: *"Create a modern space-themed app fetching NASA APOD data with a dark UI, showing the image, title, and explanation."*
- **Workflow:** I provided the intent, and the AI generated the HTML/CSS/JS structure. I then asked for specific refinements, like adding a loading state and handling video content correctly.

## 3. Challenges and Solutions
- **Challenge:** Handling the API response correctly when NASA returns a video instead of an image.
- **Solution:** The AI suggested checking the `media_type` property in the JSON response and dynamically switching between an `<img>` tag and an `<iframe>` tag.
- **Manual Fixes:** I had to ensure my local file extensions were correct (fixing the .txt issue) and organize the project folder, which the AI guided me through.

## 4. Reflection
Vibe coding changed my workflow from *Think > Syntax Lookup > Write* to *Think > Prompt > Verify*. It significantly lowers the barrier to building complex apps with API integrations. I plan to use this workflow for future prototyping as it saves immense time on boilerplate code.
