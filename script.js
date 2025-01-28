// copied and edited from https://www.geeksforgeeks.org/build-a-drag-drop-kanban-board-using-html-css-javascript/
// https://codepen.io/umurkose/pen/wvYWgQm
var data = new Array();
var parts = ["Alto","Soprano","Boys"]
var numOfGroups = 3;
var dragSrcEl = null;
var displayDiv = document.createElement("div");
displayDiv.style = "width: 100%;";
var resultsDiv = document.createElement("div");
resultsDiv.style = "display: flex;width: 100%;margin-top: 30px;align-items: center;justify-content: center;flex-wrap: wrap;";

function initUpdate() {
    data = new Array();
    parts = document.getElementById("parts").value.split(",");
    for (let i = 0; i < parts.length; i++) {
        parts[i] = parts[i].trim();
    }
    numOfGroups = document.getElementById("num-of-groups").value;
    const board = document.getElementById("board");
    board.innerHTML = '';
    displayDiv.innerHTML = '';

    // https://makitweb.com/how-to-read-csv-file-and-display-its-content-using-javascript/
    const files = document.querySelector('#data-file').files;
    if(files.length > 0 ){
        for (let i = 0; i < parts.length; i++) {
            for (let j = 1; j <= numOfGroups; j++) {
                const group = document.createElement("div");
                group.id = `group-${parts[i]}-${j}`;
                group.className = "group";
                group.innerHTML =
                    `<h2>Group ${parts[i]} ${j}</h2>
                    <hr>
                    <table class="table-summary"></table>`;
                group.style = "display: none;";
                if (i == 0) group.style = "display: block;";
                board.appendChild(group);
                for (let z = 1; z <= numOfGroups; z++) {
                    if (z != j) {
                        var btn = document.createElement("input");
                        btn.type = "submit"
                        btn.value = `Swap with Group ${z} ${parts[i]}`;
                        btn.style = "margin-left: 10px";
                        btn.addEventListener("click", function(e) {
                            var group1 = document.querySelectorAll(`#group-${parts[i]}-${j} tbody tr`);
                            var group2 = document.querySelectorAll(`#group-${parts[i]}-${z} tbody tr`);
                            for (let row = 0; row < group1.length; row++) {
                                data[parseInt(group1[row].id.split("-")[1])+1][2] = z.toString();
                                document.querySelector(`#group-${parts[i]}-${z} tbody`).appendChild(group1[row]);
                            }
                            for (let row = 0; row < group2.length; row++) {
                                data[parseInt(group2[row].id.split("-")[1])+1][2] = j.toString();
                                document.querySelector(`#group-${parts[i]}-${j} tbody`).appendChild(group2[row]);
                            }
                            updateColCount(`group-${parts[i]}-${j}`);
                            updateColCount(`group-${parts[i]}-${z}`);
                        })
                        group.querySelector(`hr`).insertAdjacentElement("beforebegin", btn);
                    }
                }
            }
            var displayBtn = document.createElement("input");
            displayBtn.type = "submit"
            displayBtn.value = `Show ${parts[i]}`;
            if (i == 0) displayBtn.value = `Showing ${parts[i]}`;
            displayBtn.style = `${i == 0 ? "" : "margin-left: 10px;"}margin-top: 5px;`;
            displayBtn.addEventListener("click", function(e) {
                var displayBtns = document.querySelectorAll(".head div")[1].querySelectorAll("input");
                for (let y = 0; y < parts.length; y++) {
                    for (let z = 1; z <= numOfGroups; z++) {
                        document.getElementById(`group-${parts[y]}-${z}`).style = y == i ? "display: block;" : "display: none;";
                    }
                    displayBtns[y].value = `${y == i ? "Showing" : "Show"} ${parts[y]}`;
                }
            })
            displayDiv.appendChild(displayBtn);
            document.querySelector(".head").appendChild(displayDiv);
        }
        var saveBtn = document.createElement("input");
        saveBtn.type = "submit"
        saveBtn.value = "Save to a CSV";
        saveBtn.style = "display: inline;margin-top: 5px;";
        saveBtn.addEventListener("click", saveToFile)
        resultsDiv.appendChild(saveBtn);
        var displayResultsBtn = document.createElement("input");
        displayResultsBtn.type = "submit"
        displayResultsBtn.value = "Display results";
        displayResultsBtn.style = "display: inline;margin-top: 5px;margin-left: 10px;";
        displayResultsBtn.addEventListener("click", displayResult)
        resultsDiv.appendChild(displayResultsBtn);
        var childResultsDiv = document.createElement("div");
        childResultsDiv.id = "results";
        childResultsDiv.style = "width: 100%;text-align: center;margin-top: 30px;";
        resultsDiv.appendChild(childResultsDiv);
        board.appendChild(resultsDiv);
        const file = files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
            let i = 0;
            if (!event.target.result.startsWith("Timestamp")) {
                data = event.target.result.split("\n").map(row => row.split(","));
            } else {
                event.target.result.split('\n').forEach(row => {
                    if (row.includes(",")) {
                        data.push(new Array());
                        let j = 0;
                        row.split(',').forEach(cell => {
                            if (j == 1) {
                                if (i == 0) {
                                    data[data.length-1].push("Name");
                                } else {
                                    data[data.length-1].push(cell.trim().split("@")[0].split(".")
                                        .map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(" "));
                                }
                            } else if (j == 3) {
                                if (i == 0) {
                                    data[data.length-1].push("Part");
                                    data[data.length-1].push("Group");
                                } else {
                                    data[data.length-1].push(cell.trim());
                                    data[data.length-1].push(null);
                                }
                            } else if (j == 4) {
                                if (i == 0) {
                                    data[data.length-1].push("Guitar");
                                } else if (cell.trim() == "Yes") {
                                    data[data.length-1].push(1);
                                } else if (cell.trim() == "No") {
                                    data[data.length-1].push(0);
                                } else {
                                    data[data.length-1].push(cell.trim());
                                }
                            } else if (j > 4) {
                                if (cell.trim() == "Yes") {
                                    data[data.length-1].push(1);
                                } else if (cell.trim() == "No") {
                                    data[data.length-1].push(0);
                                } else {
                                    data[data.length-1].push(cell.trim());
                                }
                            }
                            j++;
                        });
                        i++;
                    }
                });
                improvise();
            }
            for (let i = 0; i < data.length; i++) {
                if (i == 0) {
                    for (let y = 0; y < parts.length; y++) {
                        for (let z = 1; z <= numOfGroups; z++) {
                            var newTHead = document.getElementById(`group-${parts[y]}-${z}`).querySelector("table").createTHead();
                            for (let x = 0; x < 2; x++) {
                                var newRow = newTHead.insertRow();
                                for (let col = 2; col < data[i].length; col++) {
                                    if (x == 0) {
                                        if (col == 2) {
                                            var newCell = newRow.insertCell();
                                            newCell.outerHTML = `<th class="col-name" style="width:10em;">Name</th>`;
                                        } else if (col == 3) {
                                            newCell = newRow.insertCell();
                                            newCell.outerHTML = `<th class="col-name">Guitar</th>`;
                                        } else if (col > 3) {
                                            var newCell = newRow.insertCell();
                                            newCell.outerHTML = `<th class="col-name">${data[i][col]}</th>`;
                                        }
                                    } else {
                                        var newCell = newRow.insertCell();
                                        newCell.outerHTML = `<th class="col-count">0</th>`;
                                    }
                                }
                                newRow.addEventListener('dragover', function (e) {
                                    e.preventDefault();
                                    x == 0 ? this.nextSibling.classList.add("dragged-border-bottom") :
                                        this.classList.add("dragged-border-bottom");
                                });
                                newRow.addEventListener('dragenter', function (e) {
                                    e.preventDefault();
                                    x == 0 ? this.nextSibling.classList.add("dragged-border-bottom") :
                                        this.classList.add("dragged-border-bottom");
                                });
                                newRow.addEventListener('dragleave', function (e) {
                                    x == 0 ? this.nextSibling.classList.add("dragged-border-bottom") :
                                        this.classList.add("dragged-border-bottom");
                                });
                                newRow.addEventListener("drop", function(e) {
                                    e.preventDefault();
                                    // If the drag source element is not the current row
                                    if (dragSrcEl != this) {
                                        srcParentId = dragSrcEl.parentElement.parentElement.parentElement.id;
                                        trgParentId = this.parentElement.parentElement.parentElement.id;
                                        search = document.querySelector(`#${trgParentId} tbody tr`);
                                        if (search == null) {
                                            document.querySelector(`#${trgParentId} tbody`).appendChild(dragSrcEl);
                                        } else {
                                            document.querySelector(`#${trgParentId} tbody`).insertBefore(dragSrcEl, search);
                                        }
                                        data[parseInt(dragSrcEl.id.split("-")[1])+1][2] = trgParentId.split("-")[2];
                                        updateColCount(srcParentId);
                                        updateColCount(trgParentId);
                                    }
                                    // Remove the border classes from all table rows
                                    document.querySelectorAll('.dragged-border').forEach(function (el) {
                                        el.classList.remove('dragged-border');
                                    });
                                    document.querySelectorAll('.dragged-border-bottom').forEach(function (el) {
                                        el.classList.remove('dragged-border-bottom');
                                    });
                                    updateGuitarStyle();
                                });
                            }
                            document.getElementById(`group-${parts[y]}-${z}`).querySelector("table").createTBody();
                        }
                    }
                } else {
                    updateTable(i);
                }
            };
        for (let y = 0; y < parts.length; y++) {
            for (let z = 1; z <= numOfGroups; z++) {
                updateColCount(`group-${parts[y]}-${z}`);
            }
        }
        updateGuitarStyle();
        };
        reader.readAsText(file);
    } else {
        alert("Please select a file.");
    }
}

function updateTable(i) {
    var newRow = document.getElementById(`group-${data[i][1]}-${data[i][2]}`).querySelector("table tbody").insertRow();
    newRow.id = `member-${i-1}`;
    newRow.draggable = true;
    newRow.addEventListener('dragstart', function (e) {
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData("text/plain", e.target.id);
        this.classList.add('dragged');
    });
    newRow.addEventListener('dragend', function (e) {
        this.classList.remove('dragged');
        document.querySelectorAll('.dragged').forEach(function (el) {
            el.classList.remove('dragged');
        });
    });
    newRow.addEventListener('dragover', function (e) {
        e.preventDefault();
        this.classList.add("dragged-border");
    });
    newRow.addEventListener('dragenter', function (e) {
        e.preventDefault();
        this.classList.add("dragged-border");
    });
    newRow.addEventListener('dragleave', function (e) {
        this.classList.remove("dragged-border");
    });
    newRow.addEventListener("drop", function(e) {
        e.preventDefault();
        // If the drag source element is not the current row
        if (dragSrcEl != this) {
            srcParentId = dragSrcEl.parentElement.parentElement.parentElement.id;
            trgParentId = this.parentElement.parentElement.parentElement.id;
            this.parentElement.insertBefore(dragSrcEl, this);
            data[parseInt(dragSrcEl.id.split("-")[1])+1][2] = data[parseInt(this.id.split("-")[1])+1][2];
            updateColCount(srcParentId);
            updateColCount(trgParentId);
        }
        updateGuitarStyle();
        document.querySelectorAll('.dragged-border').forEach(function (el) {
            el.classList.remove('dragged-border');
        });
        document.querySelectorAll('.dragged-border-bottom').forEach(function (el) {
            el.classList.remove('dragged-border-bottom');
        });
    });
    for (let col = 0; col < data[i].length; col++) {
        if (col > 2 || col == 0) {
            var newCell = newRow.insertCell();
            newCell.innerHTML = data[i][col];
            if (col > 3) {
                if ((data[i][3] == 1 || data[i][3] == "1") && (data[i][col] == 1 || data[i][col] == "1")) {
                    newCell.classList.add("guitar-available");
                } else if (data[i][col] == 1 || data[i][col] == "1") {
                    newCell.classList.add('regular-available');
                }
            }
        }
    }
}

function updateGuitarStyle() {
    let row = document.querySelectorAll(".col-count.guitar-available");
    row.forEach(r => {r.classList.remove("guitar-available")});
    for (let i = 1; i <= numOfGroups; i++) {
        let sums = Array(data[0].length-4).fill(0);
        for (let j = 0; j < parts.length; j++) {
            document.getElementById(`group-${parts[j]}-${i}`).querySelectorAll("table tr").forEach(row => {
                let elements = row.querySelectorAll("td");
                if (elements) {
                    for (let z = 2; z < elements.length; z++) {
                        if ((elements[z].innerHTML != "0") && (elements[1].innerHTML == "1")) sums[z-2]++;
                    }
                }
            });
        }
        for (let j = 0; j < parts.length; j++) {
            let row = document.getElementById(`group-${parts[j]}-${i}`).querySelectorAll("th.col-count");
            for (let col = 2; col < row.length; col++) {
                if (sums[col-2] > 0) {
                    row[col].classList.add("guitar-available");
                }
            }
        }
    }
}

function updateColCount(id) {
    let sums = Array(data[0].length-2).fill(0);
    document.getElementById(id).querySelectorAll("table tr").forEach(row => {
        let elements = row.querySelectorAll("td");
        if (elements) {
            let j = 0;
            elements.forEach(element => {
                if (element.innerHTML != "0") sums[j]++;
                j++;
            })
        }
    });
    let row = document.getElementById(id).querySelectorAll("table thead tr")[1].querySelectorAll(".col-count");
    for (let col = 0; col < data[0].length-2; col++) {
        row[col].innerHTML = sums[col];
    }
}

function sortRowsByTimeAvailable(array) {
    const header = array[0];
    const sortedRows = array.slice(1).sort((rowA, rowB) => {
        const sumA = rowA.slice(4).reduce((sum, val) => sum + val, 0);
        const sumB = rowB.slice(4).reduce((sum, val) => sum + val, 0);
        return sumB - sumA;
    });
    return [header, ...sortedRows];
}

function getTimeSums(part, group) {
    var timeColumnIndices = Array.from({length: data[0].length-4}, (_, i) => i + 4);
    var timeSums = new Array(timeColumnIndices.length).fill(0);
    data.slice(1).filter(row => row[1] == part && row[2] == group).forEach(row => {
        timeColumnIndices.forEach((colIndex, i) => {
            timeSums[i] += row[colIndex];
        });
    });
    return timeSums;
}
function bestScoringPotential(testing) {
    let defaultArray = new Array();
    let res = new Array(numOfGroups).fill(0);
    for (let i = 0; i < numOfGroups; i++) {
        defaultArray[i] = getTimeSums(testing[1], (i+1).toString());
        let count_total = data.slice(1).reduce((count, row) => {
            return row[1] == testing[1] ? count + 1 : count;
          }, 0);
        let count_sub = data.slice(1).reduce((count, row) => {
            return row[1] == testing[1] && row[3] == (i+1).toString() ? count + 1 : count;
        }, 0);
        if (Math.ceil(count_total/numOfGroups) <= count_sub) res[i-1] += 999999;
    }
    for (let i = 1; i <= numOfGroups; i++){
        var array = defaultArray.slice();
        for (let j = 1; j <= numOfGroups; j++) {
            if (i == j) {
                array[i] += testing.slice(4);
            }
        }
        var numRows = array.length;
        var numColumns = array[0].length;
        var columnSums = new Array(numColumns).fill(0);
        for (let i = 0; i < numRows - 1; i++) {
            for (let j = i + 1; j < numRows; j++) {
                for (let col = 0; col < numColumns; col++) {
                    var diff = array[i][col] - array[j][col];
                    columnSums[col] += diff * diff;
                }
            }
        }
        var res1 = columnSums.reduce((acc, num) => acc + num, 0);
        res[i-1] = res1 / columnSums.length;
    }
    let minIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i;
    }
    return (minIndex+1).toString();
  }

  return minIndex;
    return 
}

function improvise() {
    data = sortRowsByTimeAvailable(data).slice();
    var guitarView = data.slice(1).filter(row => row[3] == 1);
    for (let i = 1; i <= numOfGroups && guitarView.length != 0; i++) {
        data.forEach(row => {
            if (row[0] == guitarView[0][0]) {
                row[2] = i.toString();
            }
        });
        guitarView = guitarView.filter(row => row[2] == null);
    }
    if (guitarView.length != 0) {
        //TODO potentially more logic to distribute the guitarists
    }
    var unallocatedView = data.slice(1).filter(row => row[2] == null);
    for (let i = 0; i < parts.length; i++) {
        var partUnallocatedView = unallocatedView.filter(row => row[1] == parts[i]);
        var j = 1;
        while (partUnallocatedView.length != 0){
            data.forEach(row => {
                if (row[0] == partUnallocatedView[0][0]) {
                    row[2] = j.toString();
                    //TODO this is for improving initial division logic row[2] = bestScoringPotential(row);
                }
            });
            j++;
            if (j > numOfGroups) j = 1;
            unallocatedView = unallocatedView.filter(row => row[2] == null);
            partUnallocatedView = partUnallocatedView.filter(row => row[2] == null);
        }
    }
}

function saveToFile() {
    var csvContent = data.map(row => row.join(",")).join("\n");

    // Create a Blob from the CSV string
    var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Create a URL for the Blob
    var url = URL.createObjectURL(blob);

    // Create a detached <a> element and trigger the download
    var link = document.createElement("a");
    link.href = url;
    var now = new Date();
    var year = now.getFullYear();
    var month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    var day = String(now.getDate()).padStart(2, "0");
    var hours = String(now.getHours()).padStart(2, "0");
    var minutes = String(now.getMinutes()).padStart(2, "0");

    // Format the filename
    link.download = `valentines-availability-division-${year}-${month}-${day}-${hours}-${minutes}.csv`;
    link.click();

    // Revoke the URL to free up memory
    URL.revokeObjectURL(url);
}

function displayResult() {
    var childResultsDiv = document.getElementById("results");
    array =  data.slice(1).sort((a, b) => {
        if (a[2] !== b[2]) {
            return (a[2] || "").localeCompare(b[2] || "");
        }
        return a[0].localeCompare(b[0]);
    });
    var currentGroup = 1;
    var results = "<span class='group-title'>Group 1</span><br>";
    for (let i = 0; i < array.length; i++) {
        if (array[i][2] != currentGroup.toString()) {
            currentGroup++;
            results += `<br><span class='group-title'>Group ${currentGroup}</span><br>`;
        }
        results += `${array[i][0]}<br>`;
    }
    childResultsDiv.innerHTML = results;
}
