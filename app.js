
        // Initialize Cloud Firestore through Firebase
        firebase.initializeApp({
            apiKey: "AIzaSyBPC4C5o_94_3oz396lRxzOiFGi5iS6X8s",
            authDomain: "onlineshopping-20bbe.firebaseapp.com",
            projectId: "onlineshopping-20bbe",
        });


        function addData(){
            
        var db = firebase.firestore();
        db.collection("orders").add({
            customerName: document.getElementById("uInput").value,
            orderTitle: "khoya",
            qtyInKg: 2,
            additionalComments: "",
            address: "h3 ,street23",
            phoneNumber: "12345",
            date: new Date().getTime()
        })
            .then(function (docRef) {
                console.log("Document written with ID:", docRef.id);
            })
            .catch(function (error) {
                console.log("Error adding orders", error)
            })

        }
  