

//TASK 1: IMPLEMENTING A MOVIE WATCH LIST MANAGER 
let movieId = 1;
const movieWatchlist = [];

// Add a movie
function addMovie(title, genre, year) {
  const movie = {
    id: movieId++,
    title: title,
    genre: genre,
    year: year,
    watched: false
  };
  movieWatchlist.push(movie);
  console.log("Added:", movie);
}

// Mark as watched/unwatched
function markWatched(id, watched = true) {
  const movie = movieWatchlist.find(m => m.id === id);
  if (movie) {
    movie.watched = watched;
    console.log("Updated:", movie);
  } else {
    console.log("Movie not found.");
  }
}

// List movies by genre or watched status
function listMovies({ genre = null, watched = null } = {}) {
  let filtered = [...movieWatchlist];

  if (genre) {
    filtered = filtered.filter(m => m.genre.toLowerCase() === genre.toLowerCase());
  }
  if (watched !== null) {
    filtered = filtered.filter(m => m.watched === watched);
  }

  console.log("Movies:");
  filtered.forEach(m => {
    console.log(`[${m.id}] ${m.title} (${m.year}) - ${m.genre} - ${m.watched ? "Watched" : "Unwatched"}`);
  });
}

// Delete a movie
function deleteMovie(id) {
  const index = movieWatchlist.findIndex(m => m.id === id);
  if (index !== -1) {
    movieWatchlist.splice(index, 1);
    console.log(`Deleted movie with ID ${id}`);
  } else {
    console.log("Movie not found.");
  }
}

// Sort movies
function sortMovies(by = "title") {
  if (by === "title") {
    movieWatchlist.sort((a, b) => a.title.localeCompare(b.title));
  } else if (by === "year") {
    movieWatchlist.sort((a, b) => a.year - b.year);
  } else {
    console.log("Invalid sort key. Use 'title' or 'year'.");
    return;
  }

  listMovies();
}

// Example usage
addMovie("Inception", "Sci-Fi", 2010);
addMovie("The Matrix", "Sci-Fi", 1999);
addMovie("Titanic", "Romance", 1997);

markWatched(2);

console.log("\nUnwatched Movies:");
listMovies({ watched: false });

console.log("\nMovies in Sci-Fi genre:");
listMovies({ genre: "Sci-Fi" });

console.log("\nMovies sorted by year:");
sortMovies("year");

console.log("\nDeleting movie with ID 3:");
deleteMovie(3);

console.log("\nAll Movies:");
listMovies();






//TASK 2: IMPLEMENTING A TODO LIST
// ========== 1. SETUP ==========
// A basket to hold your tasks and a counter for each new task
let taskId = 1;
const todoList = [];

// ========== 2. ADD TASK ==========
function addTask(title) {
  const task = {
    id: taskId++,        // Unique number tag
    title: title,        // What the task is
    completed: false     // It’s not done yet
  };
  todoList.push(task);   
  console.log("Task added:", task);
}

// ========== 3. MARK TASK DONE / UNDONE ==========
function markTask(id, completed = true) {
  const task = todoList.find(t => t.id === id);
  if (task) {
    task.completed = completed;     
    console.log("Task updated:", task);
  } else {
    console.log("Task not found.");
  }
}

// ========== 4. FILTER TASKS ==========
function filterTasks(completed = true) {
  const filtered = todoList.filter(t => t.completed === completed);
  
  console.log(completed ? "✓ Completed Tasks:" : "✗ Pending Tasks:");
  if (filtered.length === 0) {
    console.log("No tasks found.");
  } else {
    filtered.forEach(t => {
      console.log(`[${t.id}] ${t.title} - ${t.completed ? "Done" : "Not Done"}`);
    });
  }
}

// ========== 5. DELETE TASK ==========
function deleteTask(id) {
  const index = todoList.findIndex(t => t.id === id);
  if (index !== -1) {
    const removed = todoList.splice(index, 1); 
    console.log("Task deleted:", removed[0]);
  } else {
    console.log("Task not found.");
  }
}

// ========== 6. LIST ALL TASKS ==========
function listAllTasks() {
  console.log("All Tasks:");
  if (todoList.length === 0) {
    console.log("No tasks in the list.");
  } else {
    todoList.forEach(t => {
      console.log(`[${t.id}] ${t.title} - ${t.completed ? "Done" : "Not Done"}`);
    });
  }
}

// ========== 7. EXAMPLES ==========
addTask("Brush my teeth");
addTask("Do my homework");
addTask("Feed the dog");

markTask(2);         // Mark "Do my homework" as done

filterTasks(false);  // Show not done
filterTasks(true);   // Show done

deleteTask(1);       // Delete "Brush my teeth"

listAllTasks();      // See what's left
