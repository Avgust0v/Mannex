const typeSelect = () => {
  const element = document.querySelector(".select--type");
  const choices = new Choices(element, {
    searchEnabled: false,
  });
};

const manufacturerSelect = () => {
  const element = document.querySelector(".select--manufacturer");
  const choices = new Choices(element, {
    searchEnabled: false,
  });
};

const sizeSelect = () => {
  const element = document.querySelector(".select--size");
  const choices = new Choices(element, {
    searchEnabled: false,
  });
};

const diameterSelect = () => {
  const element = document.querySelector(".select--diameter");
  const choices = new Choices(element, {
    searchEnabled: false,
  });
};

typeSelect();
manufacturerSelect();
sizeSelect();
diameterSelect();
