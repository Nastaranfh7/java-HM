
document.addEventListener("DOMContentLoaded", function() {
  
  let commentCount = 0;

  
  const nameInput = document.getElementById("nameInput");
  const commentInput = document.getElementById("commentInput");
  const postButton = document.getElementById("postButton");
  const commentsContainer = document.getElementById("commentsContainer");

  
  function addComment() {
    
    const commentElement = document.createElement("div");
    commentElement.classList.add("mt-3");

    
    const commentContent = document.createElement("p");
    commentContent.innerHTML = `<i class="fas fa-user-circle"></i> <strong>${nameInput.value}</strong>: ${commentInput.value}`;
    commentElement.appendChild(commentContent);

   
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-sm", "btn-danger");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
      commentElement.remove();
      commentCount--;
      updateCommentCount();
    });
    commentElement.appendChild(deleteButton);

    
    commentsContainer.appendChild(commentElement);

    
    commentCount++;
    updateCommentCount();

   
    nameInput.value = "";
    commentInput.value = "";
  }

  
  function updateCommentCount() {
    document.getElementById("commentCount").innerText = commentCount;
  }

  
  postButton.addEventListener("click", function() {
    if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
      addComment();
    }
  });
});
