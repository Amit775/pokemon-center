import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutMachinesInput } from './moves-create-without-machines.input';

@InputType()
export class MovesCreateOrConnectWithoutMachinesInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutMachinesInput, {nullable:false})
    @Type(() => MovesCreateWithoutMachinesInput)
    create!: MovesCreateWithoutMachinesInput;
}
