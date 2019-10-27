package main
 
import (
    "log"
    "net/http"
		"github.com/gorilla/mux"
		"encoding/json"
)

 
type Message struct {
    Message   string `json:"message"`
}
 
type Messages []Message
 
func main() {
 
    router := mux.NewRouter().StrictSlash(true)
    router.HandleFunc("/", Index)
    log.Fatal(http.ListenAndServe(":8080", router))
}
 
func Index(w http.ResponseWriter, r *http.Request) {
		messages := Messages{
				Message{Message: "Hello from GO!"},
		}
		w.Header().Set("Content-Type", "application/json; charset=UTF-8")
		if err := json.NewEncoder(w).Encode(messages); err != nil {
			panic(err)
		}
}