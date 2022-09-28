export class List {
    constructor(ul) {
        this.ul = ul;
    }
    render(doc, heading) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        h4.innerText = heading;
        p.innerText = doc.format();
        li.append(h4);
        li.append(p);
        this.ul.append(li);
    }
}
