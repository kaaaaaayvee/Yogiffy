import React from 'react';
import Services from './Services';
import { YogaProgram } from '../../data/yogaprograms';

const Programs = () => {
  let programs = YogaProgram.map((program) => {
    console.log("program")
    return <Services title={program.title}
                   desc={program.description}
                   img={program.img_src}
                    />
  }); 
  return (
    <div>
      <ul>
        {programs}    
      </ul>
    </div>
  );
}

export default Programs;
