// copied and edited from https://www.geeksforgeeks.org/build-a-drag-drop-kanban-board-using-html-css-javascript/
// https://codepen.io/umurkose/pen/wvYWgQm
var data = new Array();
var parts = ["Alto","Soprano","Boys"]
var numOfGroups = 3;
var dragSrcEl = null;

var displayDiv = document.createElement("div");
displayDiv.style = "width: 100%;";

var resultsDiv = document.createElement("div");
resultsDiv.style = "display: flex;width: 100%;margin: 30px 0;align-items: center;justify-content: center;flex-wrap: wrap;";
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
                        let btn = document.createElement("input");
                        btn.type = "submit"
                        btn.value = `Swap with Group ${z} ${parts[i]}`;
                        btn.style = "margin-left: 10px";
                        btn.addEventListener("click", function(e) {
                            let group1 = document.querySelectorAll(`#group-${parts[i]}-${j} tbody tr`);
                            let group2 = document.querySelectorAll(`#group-${parts[i]}-${z} tbody tr`);
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
                            updateGuitarStyle();
                        })
                        group.querySelector(`hr`).insertAdjacentElement("beforebegin", btn);
                    }
                }
            }
            let displayBtn = document.createElement("input");
            displayBtn.type = "submit"
            displayBtn.value = `Show ${parts[i]}`;
            if (i == 0) displayBtn.value = `Showing ${parts[i]}`;
            displayBtn.style = `${i == 0 ? "" : "margin-left: 10px;"}margin-top: 5px;`;
            displayBtn.addEventListener("click", function(e) {
                let displayBtns = document.querySelectorAll(".head div")[1].querySelectorAll("input");
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
        const file = files[0];
        let reader = new FileReader();
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
                                } else if (cell.trim().toLowerCase() == "yes") {
                                    data[data.length-1].push(1);
                                } else if (cell.trim().toLowerCase() == "no") {
                                    data[data.length-1].push(0);
                                } else {
                                    data[data.length-1].push(cell.trim());
                                }
                            } else if (j > 4) {
                                if (cell.trim().toLowerCase() == "yes") {
                                    data[data.length-1].push(1);
                                } else if (cell.trim().toLowerCase() == "no") {
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
                            let newTHead = document.getElementById(`group-${parts[y]}-${z}`).querySelector("table").createTHead();
                            for (let x = 0; x < 2; x++) {
                                let newRow = newTHead.insertRow();
                                for (let col = 2; col < data[i].length; col++) {
                                    let newCell = newRow.insertCell();
                                    if (x == 0) {
                                        if (col == 2) newCell.outerHTML = `<th class="col-name" style="width: 16em;">Name</th>`;
                                        else if (col == 3) newCell.outerHTML = `<th class="col-name">Guitar</th>`;
                                        else if (col > 3) newCell.outerHTML = `<th class="col-name">${data[i][col]}</th>`;
                                    } else newCell.outerHTML = `<th class="col-count">0</th>`;
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
                                        this.classList.remove("dragged-border-bottom");
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
                                        updateGuitarStyle();
                                    }
                                    // Remove the border classes from all table rows
                                    document.querySelectorAll('.dragged-border').forEach(function (el) {
                                        el.classList.remove('dragged-border');
                                    });
                                    document.querySelectorAll('.dragged-border-bottom').forEach(function (el) {
                                        el.classList.remove('dragged-border-bottom');
                                    });
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
        let summary = document.createElement("div");
        summary.id = "summary";
        summary.className = "group";
        summary.innerHTML = "<h2>Summary</h2><hr>";
        let summaryTable = document.createElement("table");
        summaryTable.classList.add("table-summary");
        let summaryTHead = summaryTable.createTHead();
        let sumRow = summaryTHead.insertRow();
        for (let col = 2; col < data[0].length; col++) {
            let newCell = sumRow.insertCell();
            if (col == 2) newCell.outerHTML = `<th class="col-name"">Group</th>`;
            else if (col == 3) newCell.outerHTML = `<th class="col-name">Total ${parts.join("/")}/Guitar</th>`;
            else if (col > 3) newCell.outerHTML = `<th class="col-name">${data[0][col]}</th>`;
        }
        let summaryTBody = summaryTable.createTBody();
        for (let i = 1; i <= numOfGroups; i++) {
            let newRow = summaryTBody.insertRow();
            for (let col = 2; col < data[0].length; col++) {
                let newCell = newRow.insertCell();
                if (col == 2) newCell.innerHTML = i.toString();
                else newCell.classList.add("col-count");
            }
        }
        summary.appendChild(summaryTable);
        board.appendChild(summary);
        board.appendChild(resultsDiv);
        updateGuitarStyle();
        };
        reader.readAsText(file);
    } else {
        alert("Please select a file.");
    }
}

function updateTable(i) {
    let newRow = document.getElementById(`group-${data[i][1]}-${data[i][2]}`).querySelector("table tbody").insertRow();
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
        document.querySelectorAll('.dragged-border').forEach(function (el) {
            el.classList.remove('dragged-border');
        });
        document.querySelectorAll('.dragged-border-bottom').forEach(function (el) {
            el.classList.remove('dragged-border-bottom');
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
            updateGuitarStyle();
        }
        document.querySelectorAll('.dragged-border').forEach(function (el) {
            el.classList.remove('dragged-border');
        });
        document.querySelectorAll('.dragged-border-bottom').forEach(function (el) {
            el.classList.remove('dragged-border-bottom');
        });
    });
    for (let col = 0; col < data[i].length; col++) {
        if (col > 2 || col == 0) {
            let newCell = newRow.insertCell();
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

function updateSummaryTable() {
    let summaryTable = document.querySelectorAll("#summary tbody tr");
    let array = Array.from({ length: numOfGroups*(parts.length+1) }, () => Array(data[0].length-3).fill(0));
    data.slice(1).forEach(row => {
        let isGuitar = (row[3] == 1 || row[3] == "1");
        let loc = (parseInt(row[2])-1)*(parts.length+1);
        for (let i = 0; i < array[0].length; i++) {
            if (i == 0) {
                array[loc+parts.indexOf(row[1])][i]++;
                if (isGuitar) array[loc+parts.length][i]++;
            } else {
                if (row[i+3] == 1 || row[i+3] == "1") {
                    array[loc+parts.indexOf(row[1])][i]++;
                    if (isGuitar) array[loc+parts.length][i]++;
                }
            }
        }
    });
    for (let i = 0; i < summaryTable.length; i++) {
        let cells = summaryTable[i].querySelectorAll("td");
        for (let j = 1; j < cells.length; j++) {
            let m = i*(parts.length+1);
            cells[j].innerHTML =
                `<span style="font-size:130%;">${array[m][j-1]}</span> /
                <span style="font-size:130%;">${array[m+1][j-1]}</span> /
                <span style="font-size:130%;">${array[m+2][j-1]}</span> /
                <span style="font-size:130%;">${array[m+3][j-1]}</span>`;
            if (array[m+3][j-1] > 0 && j != 1) cells[j].classList.add("guitar-available");
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
    updateSummaryTable();
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
    let timeColumnIndices = Array.from({length: data[0].length-4}, (_, i) => i + 4);
    let timeSums = new Array(timeColumnIndices.length).fill(0);
    data.slice(1).filter(row => row[1] == part && row[2] == group).forEach(row => {
        timeColumnIndices.forEach((colIndex, i) => {
            timeSums[i] += row[colIndex];
        });
    });
    return timeSums;
}
var check = 0;
function bestScoringPotential(testing) {
    let defaultArray = new Array();
    let res = new Array(numOfGroups).fill(0);
    for (let i = 0; i < numOfGroups; i++) {
        defaultArray[i] = getTimeSums(testing[1], (i+1).toString());
        let count_total = data.slice(1).reduce((count, row) => {
            return row[1] == testing[1] ? count + 1 : count;
          }, 0);
        let count_sub = data.slice(1).reduce((count, row) => {
            return row[1] == testing[1] && row[2] == (i+1).toString() ? count + 1 : count;
        }, 0);
        if (check < 5) console.log(`${count_total} ${Math.ceil(count_total/numOfGroups)} ${count_sub}`);
        if (Math.ceil(count_total/numOfGroups) <= count_sub) res[i] = 9999;
        else res[i] = 0;
    }
    if (check < 5) console.log(res);
    for (let i = 1; i <= numOfGroups; i++){
        let array = defaultArray.map(arr => Array.isArray(arr) ? [...arr] : arr);
        for (let j = 1; j <= numOfGroups; j++) {
            if (i == j) for (let z = 0; z < array[0].length; z++) array[i-1][z] += testing[z+4];
        }
        let numRows = array.length;
        let numColumns = array[0].length;
        let columnSums = new Array(numColumns).fill(0);
        for (let i = 0; i < numRows - 1; i++) {
            for (let j = i + 1; j < numRows; j++) {
                for (let col = 0; col < numColumns; col++) {
                    let diff = array[i][col] - array[j][col];
                    columnSums[col] += diff * diff;
                }
            }
        }
        let res1 = columnSums.reduce((acc, num) => acc + num, 0);
        res[i-1] = res[i-1] + res1 / columnSums.length;
    }
    if (check < 5) console.log(res);
    check++;
    let minIndex = 0;
    for (let i = 1; i < res.length; i++) if (res[i] < res[minIndex]) minIndex = i;
    return (minIndex+1).toString();
}

function improvise() {
    data = sortRowsByTimeAvailable(data).slice();
    let guitarView = data.slice(1).filter(row => row[3] == 1);
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
    let unallocatedView = data.slice(1).filter(row => row[2] == null);
    for (let i = 0; i < parts.length; i++) {
        let partUnallocatedView = unallocatedView.filter(row => row[1] == parts[i]);
        let j = 1;
        while (partUnallocatedView.length != 0){
            data.forEach(row => {
                if (row[0] == partUnallocatedView[0][0]) {
                    // row[2] = j.toString();
                    row[2] = bestScoringPotential(row);
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
    let csvContent = data.map(row => row.join(",")).join("\n");
    let blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.href = url;
    let now = new Date();
    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    let day = String(now.getDate()).padStart(2, "0");
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    link.download = `valentines-availability-division-${year}-${month}-${day}-${hours}-${minutes}.csv`;
    link.click();
    URL.revokeObjectURL(url);
}

function displayResult() {
    let resDiv = document.getElementById("results");
    array =  data.slice(1).sort((a, b) => {
        if (a[2] !== b[2]) {
            return (a[2] || "").localeCompare(b[2] || "");
        }
        return a[0].localeCompare(b[0]);
    });
    let currentGroup = 1;
    let results = "<span class='group-title'>Group 1</span><br>";
    for (let i = 0; i < array.length; i++) {
        if (array[i][2] != currentGroup.toString()) {
            currentGroup++;
            results += `<br><span class='group-title'>Group ${currentGroup}</span><br>`;
        }
        results += `${array[i][0]}<br>`;
    }
    resDiv.innerHTML = results;
}
