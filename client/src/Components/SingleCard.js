import React, {  } from "react";
import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";


function SingleCard( {singleCard}) {

    const doc = new jsPDF();
    const Foo = 
        <div className={singleCard.template.classname}>
            <div className="message_render">
                <div>{singleCard.salutation} {singleCard.receiver},</div>
                <br/>
                <div>{singleCard.message}</div>
                <br/>
                <div>{singleCard.closing}</div>
                <div>-{singleCard.user.first_name}</div> 
                </div>
        </div>
        const save = () => {
        doc.html(ReactDOMServer.renderToStaticMarkup(Foo), {
          callback: () => {
            doc.save("myDocument.pdf");
          }
        });
      };


    return (
        <div className="form_background">
        <div className="top">
            <div className="flex justify-center">
            <div className={singleCard.template.classname}>
                <div className="message_render">
                    <div>{singleCard.salutation} {singleCard.receiver},</div>
                    <br/>
                    <div>{singleCard.message}</div>
                    <br/>
                    <div>{singleCard.closing}</div>
                    <div>-{singleCard.user.first_name}</div> 
                </div>
            </div>
            </div>
            <div className="flex justify-center mt-8">
                <button className="bg-red-100 border-solid border-2 border-red-600  rounded-lg font-semibold px-6 py-2" onClick={save} >Save</button>
            </div>
        </div>
        </div>
        
    )

}

export default SingleCard