import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'
import $ from 'jquery';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
function App() {
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center">
          <h3>Timeline</h3>
      </div>
      
      <div className="container">
          <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ]}
            dateClick={function(arg) {
              $("#myModal").modal("show");
              $(".modal-body").html("");
              $(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
            }}
            initialView="dayGridMonth"
            events={[
              { title: 'event 1', date: '2020-07-01' },
              { title: 'event 2', date: '2020-07-02' }
            ]}
          />
        </div>
          <div class="modal" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
              
                <div class="modal-header">
                  <h4 class="modal-title align-center">Date is Below</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                
                <div class="modal-body text-center">
                  
                </div>
              
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
      
    </div>
  );
}
export default App;