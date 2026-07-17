import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateManyVersionGroupInput } from './machines-create-many-version-group.input';
import { Type } from 'class-transformer';

@InputType()
export class MachinesCreateManyVersionGroupInputEnvelope {

    @Field(() => [MachinesCreateManyVersionGroupInput], {nullable:false})
    @Type(() => MachinesCreateManyVersionGroupInput)
    data!: Array<MachinesCreateManyVersionGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
