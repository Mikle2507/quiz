import {
  useEffect,
  useState
} from "react";

const useCounter = (value, setValue, max) => {

  const [disabledMinus, setDisabledMinus] = useState(false);
  const [disabledPlus, setDisabledPlus] = useState(false);

  const handlePlus = (newValue) => {
    setValue(+newValue + 1);
  };

  const handleMinus = (newValue) => {
    setValue(newValue - 1);
  };

  const setValueChange = (newValue) => {
    setValue(newValue.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1"));
  };

  const setValueBlur = (newValue) => {

    if (newValue.length <= 0 || newValue == 0) {
      setValue(1);
    } else if (newValue > max && max !== null) {
      setValue(max);
    } else {
      newValue = newValue.replace(/^0+/, '');
      setValue(newValue);
    }
  };

  useEffect(() => {
    if (value <= 1) {
      setDisabledMinus(true);
    } else {
      setDisabledMinus(false);
    }

    if (max !== null) {
      if (value >= max) {
        setDisabledPlus(true);
      } else {
        setDisabledPlus(false);
      }
    }
  }, [value, max]);

  return {
    handlePlus,
    handleMinus,
    setValueChange,
    setValueBlur,
    disabledMinus,
    disabledPlus
  }
};

export default useCounter;