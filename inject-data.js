chrome.runtime.connect({name:"injected-data"}).onMessage.addListener((e=>{const{harRecords:t,currentRecording:n=0}=e.controls;if(n<t.length)try{window.localStorage.setItem("__TEST_DATA__",JSON.stringify(t[n]))}catch(e){window.localStorage.setItem("__TEST_ERROR__",e.name)}}));
//# sourceMappingURL=inject-data.js.map