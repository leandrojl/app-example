import logo from './assets/images/logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <body class="flex flex-col min-h-screen">
    <header class="bg-blue-500 border-b-2 border-black">
        <nav class="flex flex-row justify-around items-center p-5">
            <img class="object-contain h-12 w-24" src={logo} alt="javascript logo"/>
            <a class="font-medium hover:text-yellow-500" href="#">Make a Triangle</a>
            <a class="font-medium hover:text-yellow-500" href="#">Fizz Buzz</a>
            <a class="font-medium hover:text-yellow-500" href="#">Chessboard</a>
        </nav>
    </header>

    <main class="bg-white flex-grow">  
        <div class="container mx-auto mt-5">
            <div class="flex flex-col items-center">
                      <h1 class="text-4xl font-semibold">
                        Traingle Demo
                      </h1>

                <button id="button-make-a-triangle" class="m-10 h-14 w-48 bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded">MAKE A TRIANGLE IN CONSOLE</button>
            
                
                  
                  
            
            </div>
            
        </div>
    </main>


    <footer class="flex flex-row justify-center mt-auto bg-blue-500 border-t-2 border-black p-5">
        <p class="font-medium">leandrojl. All rights reserved.</p>
    </footer>
    
</body>
    </div>
  );
}

export default App;
