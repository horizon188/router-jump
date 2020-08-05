import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.less';

export default () => {
  // declare function create(o: object | null): void;
  // create({ prop: 0 });
  // let someValue: any = "this is a string";
  // let strLength: number = (<string>{someValue}).length;
  class Animal {
    move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
    }
  }

  class Dog extends Animal {
    bark() {
      // console.log('Woof! Woof!');
    }
  }

  const dog = new Dog();
  dog.bark();
  dog.move(10);
  dog.bark();
  return (
    <div className={`page ${style.page}`}>
      home <Link to="/layout">layout</Link>
    </div>
  );
};
