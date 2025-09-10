function greet(firstname, lastname,...titles){
    console.log(`Name: ${firstname} ${lastname}`);
    console.log(`title: ${titles.join(',')}`);
    
    
}
greet("vyshna", "gireesh", "bca", "software engineer", "author");