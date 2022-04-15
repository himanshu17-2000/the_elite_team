import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react" ;
import db from "../../lib/firebase";
import Modal from "../Modal/Modal";
import "./style.css";
const Announcment = ({ classData }) => {
  const [announcment, setAnnouncment] = useState([]);

  useEffect(() => {
    if (classData) {
      let unsubscribe = db
        .collection("announcments")
        .doc("classes")
        .collection(classData.id)
        .onSnapshot((snap) => {
          setAnnouncment(snap.docs.map((doc) => doc.data()));
        });
      return () => unsubscribe();
    }
  }, [classData]);
  console.log(announcment);
  return (
    <div>
      {announcment.map((item) => (
        <div className="amt">
          <div className="amt__Cnt">
            <div className="amt__top">
              <Avatar />
              <div>{item.sender}</div>
            </div>
            <p className="amt__txt">{item.text}</p>
            <img className="amt__img" src={ 'https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-of-document-icon-isolated-png-image_5045584.jpg'} alt={item.text} />
            <br/>
            <br/>
            <Modal url= {item.imageUrl} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcment;
