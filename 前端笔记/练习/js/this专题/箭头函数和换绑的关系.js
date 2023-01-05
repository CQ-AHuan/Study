const fn = () => {
    console.log(this);
};

const obj = {};

fn.call(obj); // window
