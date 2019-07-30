
function getFruits() {
  return new Promise(resolve => {
      let result = ['apple', 'pineapple','huyapple'];
      resolve(result);
    }
  )
}

function getJuice(){
  const fruits = getFruits();
  const updatedFruits = fruits.then(
    result => {
      let juice = `I have made a juice with: ${result.join()}`;
      return juice;
    }
  );
  return updatedFruits;
}

function getSunrize() {
  const juiceWithTekilla = getJuice().then(
    juice => {
      return juice + ' with Tekilla';
    }
  );
  return juiceWithTekilla;
}

function sunriseLemon() {
  const updatedTekilla = getSunrize().then(
    sunrize => {
      return sunrize + ' plus lemon ';
    }
  );
  return updatedTekilla;
}

function transformAlcoholToWater() {
  const water = sunriseLemon().then(
    result => {
      return {
        xxx: 'water',
        result
      };
    }
  );
  return water;
}