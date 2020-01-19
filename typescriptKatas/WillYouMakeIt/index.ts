export const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => {
    return (distance/mpg) <= fuelLeft ? true : false;
  };


  console.log(zeroFuel(50, 25, 2), true);
  console.log(zeroFuel(100, 50, 1), false);