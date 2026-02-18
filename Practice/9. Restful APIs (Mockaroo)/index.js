const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//Middleware - plugin
app.use(express.urlencoded({extended : false }));
app.use(express.json());


app.use((req,res,next) => {
    fs.appendFile(
        "log.txt" , `\n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}`,
        (err,data) => {
            next();
        }
    );
});
//Routes
app.get("/users", (req , res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html)
});

//REST API:
app.get("/api/users", (req , res) => {
    return res.json(users);
});

app.route("/api/users/:id")
    .get((req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
    })
    .put((req,res) => {
            const id = Number(req.params.id);
            const body = req.body;

            const user = users.find(user => user.id === id);

            if (!user) {
                return res.status(404).json({ status: "User not found" });
            }
            // Update fields
            Object.assign(user, body);
            fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
                if (err) {
                    return res.status(500).json({ status: "Error updating user" });
                }
                return res.status(200).json({ status: "User updated", user });
                });
    })
    .delete((req,res) => { 
            const id = Number(req.params.id);

            const userIndex = users.findIndex(user => user.id === id);

            if (userIndex === -1) {
                return res.status(404).json({ status: "User not found" });
            }

            const deletedUser = users.splice(userIndex, 1);

            fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
                if (err) {
                    return res.status(500).json({ status: "Error deleting user" });
                }
                return res.status(200).json({ status: "User deleted", user: deletedUser[0] });
         });
    })

app.post("/api/users" , (req,res) => {
    const body = req.body;
    users.push({...body, id: users.length+1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
        return res.json({ status : "Pending" });
    })
    return res.json({ status : "Success" , id: users.length });
});

app.listen(PORT , () => console.log(`Server Started at PORT: ${PORT}`));