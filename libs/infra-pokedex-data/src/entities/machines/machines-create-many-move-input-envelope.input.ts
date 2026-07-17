import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateManyMoveInput } from './machines-create-many-move.input';
import { Type } from 'class-transformer';

@InputType()
export class MachinesCreateManyMoveInputEnvelope {

    @Field(() => [MachinesCreateManyMoveInput], {nullable:false})
    @Type(() => MachinesCreateManyMoveInput)
    data!: Array<MachinesCreateManyMoveInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
