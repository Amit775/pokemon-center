import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutMachinesInput } from './moves-create-without-machines.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutMachinesInput } from './moves-create-or-connect-without-machines.input';
import { MovesUpsertWithoutMachinesInput } from './moves-upsert-without-machines.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateToOneWithWhereWithoutMachinesInput } from './moves-update-to-one-with-where-without-machines.input';

@InputType()
export class MovesUpdateOneRequiredWithoutMachinesNestedInput {

    @Field(() => MovesCreateWithoutMachinesInput, {nullable:true})
    @Type(() => MovesCreateWithoutMachinesInput)
    create?: MovesCreateWithoutMachinesInput;

    @Field(() => MovesCreateOrConnectWithoutMachinesInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: MovesCreateOrConnectWithoutMachinesInput;

    @Field(() => MovesUpsertWithoutMachinesInput, {nullable:true})
    @Type(() => MovesUpsertWithoutMachinesInput)
    upsert?: MovesUpsertWithoutMachinesInput;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateToOneWithWhereWithoutMachinesInput, {nullable:true})
    @Type(() => MovesUpdateToOneWithWhereWithoutMachinesInput)
    update?: MovesUpdateToOneWithWhereWithoutMachinesInput;
}
