let Name = "Shohei"
let Classes = ["JBE", "ECON", "OB1", "JLI"];
let String = "Hello!, my name is " + Name + " and I am taking ";
for (let Index in Classes) {
    if (Index < Classes.length - 1) {
        String += Classes[Index]+",";
    } else{
        String += "and" + Classes[Index]+"."
        ;
    }
}
console.log(String);
