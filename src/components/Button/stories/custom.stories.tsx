
// export const Custom= {
//   args: {
//     primary: true,
//     label: "Button"
//   }
// };

import { makeStyles } from '@griffel/react';

import { Button } from "fish-ui-sy";

const useClasses = makeStyles({
  root: { backgroundColor: 'red', padding: '100px' },
});


export const Custom = ()=>{

  const classes = useClasses();

  

  return <div className={classes.root}>
    <Button label="Custom Button"></Button>
  </div>
}

