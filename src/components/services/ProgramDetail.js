import React from 'react';
import Service from './Service';
import { YogaProgram } from '../../data/yogaprograms';

const ProgramDetail = () => {
  return (
    <div>
      <ul>
        {<Service title={program.title}
                   desc={program.description}
                   img={program.img_src}
                   key={program.id} />}    
      </ul>
    </div>
  );
}

export default ProgramDetail;
