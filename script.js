// 1. prendre la valeur du champ
// 2. qunad on clique, on ajoute cette valeur à l'array
// 3. afficher les valeur de l'array

function run() {
  const input = document.getElementById("name");
  const form = document.getElementById("personForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const person = { name: input.value };

    // add list for each person
    const li = document.createElement("li");
    const name = document.createTextNode(person.name);
    li.appendChild(name);

    const ul = document.getElementById("personList");
    ul.appendChild(li);

    // empty the input
    input.value = "";

    // -------------- DELETE -------------- //
    // add delete button
    const deleteButton = document.createElement("button");
    const deleteButtonText = document.createTextNode("Supprimer");
    deleteButton.appendChild(deleteButtonText);
    li.appendChild(deleteButton);
    // delete a person in delete button click
    deleteButton.addEventListener("click", function (e) {
      li.remove();
    });

    // -------------- DELETE -------------- //
    // add delete button
    const editButton = document.createElement("button");
    const editButtonText = document.createTextNode("Modifier");
    editButton.appendChild(editButtonText);
    li.appendChild(editButton);
    // delete a person in delete button click
    editButton.addEventListener("click", function (e) {
      input.value = person.name;
      const addButton = document.getElementById("addButton");
      const editButton = document.getElementById("editButton");
      editButton.style.display = "block";
      addButton.style.display = "none";
    });
  });
}

run();
