import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateWithoutMachinesInput } from './moves-update-without-machines.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutMachinesInput } from './moves-create-without-machines.input';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesUpsertWithoutMachinesInput {

    @Field(() => MovesUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => MovesUpdateWithoutMachinesInput)
    update!: MovesUpdateWithoutMachinesInput;

    @Field(() => MovesCreateWithoutMachinesInput, {nullable:false})
    @Type(() => MovesCreateWithoutMachinesInput)
    create!: MovesCreateWithoutMachinesInput;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: MovesWhereInput;
}
