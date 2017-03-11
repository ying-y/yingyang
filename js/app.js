"use strict";
function renderActiProp(value, nonNumeric) {
    var td = document.createElement("td");
    td.textContent = value;
    if(nonNumeric){
        td.classList.add("mdl-data-table__cell--non-numeric");
    }
    return td;  
}

function renderActi(activity) {
    var tr = document.createElement("tr");
    tr.appendChild(renderActiProp(activity.position,true));
    tr.appendChild(renderActiProp(activity.company,true));
    tr.appendChild(renderActiProp(activity.duration,false));
    return tr;
}

function renderACTIVITIES(ACTIVITIES) {
    var tbody=document.querySelector("tbody");
    tbody.textContent="";
    for(var idx=0;idx<ACTIVITIES.length;idx++){
        var activity = ACTIVITIES[idx];
        tbody.appendChild(renderActi(activity));
    }
}

renderACTIVITIES(ACTIVITIES);