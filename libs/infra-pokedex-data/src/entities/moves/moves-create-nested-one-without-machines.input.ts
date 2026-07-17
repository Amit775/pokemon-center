import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutMachinesInput } from './moves-create-without-machines.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutMachinesInput } from './moves-create-or-connect-without-machines.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesCreateNestedOneWithoutMachinesInput {

    @Field(() => MovesCreateWithoutMachinesInput, {nullable:true})
    @Type(() => MovesCreateWithoutMachinesInput)
    create?: MovesCreateWithoutMachinesInput;

    @Field(() => MovesCreateOrConnectWithoutMachinesInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: MovesCreateOrConnectWithoutMachinesInput;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;
}
