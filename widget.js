
function storeData() {
  
  let key = document.getElementById(BWProperties.namespace + '_key_store').value;
  
  let value = document.getElementById(BWProperties.namespace + '_value_store').value;
  
  BWState.set(key, value).then(response => {
    console.log(response);
  });

}

function retrieveData() {
  
   let key = document.getElementById(BWProperties.namespace + '_key_retrieve').value;
  
  BWState.get(key).then(response => {
    console.log(response);
    BWAPI.post('/events/' + BWProperties.event_id + '/sendOnscreenMessage', {message : response.data.state});
  });
  
}

this.storeData = storeData;
this.retrieveData = retrieveData;
