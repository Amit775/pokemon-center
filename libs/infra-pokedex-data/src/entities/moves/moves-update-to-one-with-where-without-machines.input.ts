import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutMachinesInput } from './moves-update-without-machines.input';

@InputType()
export class MovesUpdateToOneWithWhereWithoutMachinesInput {

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: MovesWhereInput;

    @Field(() => MovesUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => MovesUpdateWithoutMachinesInput)
    data!: MovesUpdateWithoutMachinesInput;
}
