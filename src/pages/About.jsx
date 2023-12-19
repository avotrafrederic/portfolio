import React, { Component } from "react";
import styles from "./../components/module/home.module.css";
export default class About extends Component {
  

  render() {
    return (
      <React.Fragment>
        <section id="about" className={styles.home}>
          <div className="container mx-auto grid grid-cols-2 text-slate-300 h-full px-5">
            
            <div className="h-full flex flex-col justify-center text-justify">
                <h2 className="text-4xl font-semibold">A propos de moi</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, tempore architecto! Aut veniam quae odio distinctio animi, sapiente quod quas esse laudantium quidem magni error pariatur atque est vero fugiat!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, tempore architecto! Aut veniam quae odio distinctio animi, sapiente quod quas esse laudantium quidem magni error pariatur atque est vero fugiat!</p>
            </div>
            <div>

            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
