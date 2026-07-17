import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateManyItemInput } from './machines-create-many-item.input';
import { Type } from 'class-transformer';

@InputType()
export class MachinesCreateManyItemInputEnvelope {

    @Field(() => [MachinesCreateManyItemInput], {nullable:false})
    @Type(() => MachinesCreateManyItemInput)
    data!: Array<MachinesCreateManyItemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
