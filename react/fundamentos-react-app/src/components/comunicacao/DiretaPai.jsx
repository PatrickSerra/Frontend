import DiretaFilho from "./DiretaFilho";

const DiretaPai = (props) => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} bool={true}/>
            <DiretaFilho nome="Gabriel" idade={17} bool={false}/>
        </div>
    )
};
  
  export default DiretaPai;
  