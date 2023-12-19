import React from "react";
import styles from "./../components/module/home.module.css";
export default function Experience() {
  return (
    <React.Fragment>
      <section className={styles.home}>
        <div className="container flex flex-col h-full justify-center text-slate-300 px-5 gap-5">
          <h1 className="text-4xl font-semibold">Experiences</h1>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-y-2">
              <div>
                <h2 className="text-3xl font-mono flex items-center">Formateur en developpement <span className="ml-auto  text-xl">2022 - Now</span></h2>
                <p>JSSI Madagascar</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-mono flex items-center">
                  DevOps <span className="ml-auto text-xl">2020 - 2021</span>
                </h2>
                <p>SmartOne Madagascar</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
