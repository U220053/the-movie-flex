import "./Pages.css";
// import { useState } from "react";

function Pages({totalPages, page, setPage}) {
 
  

  let pages = [];
  for(let i = 1; i<= Math.ceil(totalPages) ; i++){
    pages.push(i);
    
  }



  
  return (<>
  {
    
      <div className="button_container">
        <button disabled={page<=1} onClick={()=> setPage(page-1)}><i class="fa-solid fa-angles-left"></i> Previous</button>
        {pages.map((page, index) =>{
          if(index<9){
            if(index === 8 ){
              return <button key={index} onClick={()=> setPage(page)}>...</button>
            }
            else
            {return <button className={page === index ? "active_button" : null} key={index} onClick={()=> setPage(page)}>{page}</button>}
          }
          else{
            return null;
          }
        })}
        <button disabled={page=== totalPages} onClick={()=> setPage(page+1)}>Next <i class="fa-solid fa-angles-right"></i></button>
    
      </div>
  }
  </>)}

export default Pages;
