import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="flex items-center flex-col justify-center border-2 gap-12 p-10 rounded-[60px] shadow-xl/40 bg-purple-900/40 backdrop-blur-3xl shadow-amber-50 opacity-75 text-blue-400">
    <h1 class="text-5xl font-bold text-shadow-lg/40 text-shadow-black">Password Generator</h1>
    <span class="italic">Safe and fast, built to last.</span>
    <section class="min-h-10 min-w-3xs">
      <div class="lg:min-h-10 min-w-xl border border-black flex justify-around p-6">
        <span id="pass" class="w-2xs">Here will be the password</span>
        <section class="flex gap-4">
          <button>Copy</button>
          <button>ReGen</button>
        </section>
      </div>
      <div class="min-h-6 min-w-auto border border-b-2 rounded-b-2xl text-center p-1">There will be the feedback message</div>
    </section>
    <section>
      <from class="flex flex-col gap-6 justify-start border-2 border-red-500 md:min-w-xl">
        <div class="grid grid-cols-2 justify-center p-6 gap-4">
          <label for="length">Length</label>
          <input type="number" value=12 min=8 max=21>
          <input class="col-span-2" type="range"/>
        </div>

        <div class="p-6 flex justify-between">
          <label for="length">Include UpperCase Letter</label>
          <input type="checkbox"/>
        </div>
        <div class="p-6 flex justify-between">
          <label for="length">Include LowerCase Letter</label>
          <input type="checkbox"/>
        </div>
        <div class="p-6 flex justify-between">
          <label for="length">Include Symbol</label>
          <input type="checkbox"/>
        </div>
        <div class="p-6 flex justify-between">
          <label for="length">Include Numbers</label>
          <input type="checkbox"/>
        </div>

      </from>
    </section>
  </div>
`