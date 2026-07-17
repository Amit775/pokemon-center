import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerriesCreateWithoutFlavorsInput } from './berries-create-without-flavors.input';
import { Type } from 'class-transformer';
import { BerriesCreateOrConnectWithoutFlavorsInput } from './berries-create-or-connect-without-flavors.input';
import { Prisma } from '@prisma/client';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';

@InputType()
export class BerriesCreateNestedOneWithoutFlavorsInput {

    @Field(() => BerriesCreateWithoutFlavorsInput, {nullable:true})
    @Type(() => BerriesCreateWithoutFlavorsInput)
    create?: BerriesCreateWithoutFlavorsInput;

    @Field(() => BerriesCreateOrConnectWithoutFlavorsInput, {nullable:true})
    @Type(() => BerriesCreateOrConnectWithoutFlavorsInput)
    connectOrCreate?: BerriesCreateOrConnectWithoutFlavorsInput;

    @Field(() => BerriesWhereUniqueInput, {nullable:true})
    @Type(() => BerriesWhereUniqueInput)
    connect?: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;
}
