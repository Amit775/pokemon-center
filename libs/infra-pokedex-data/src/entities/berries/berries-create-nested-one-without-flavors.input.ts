import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesCreateWithoutFlavorsInput } from './berries-create-without-flavors.input';
import { Type } from 'class-transformer';
import { BerriesCreateOrConnectWithoutFlavorsInput } from './berries-create-or-connect-without-flavors.input';
import { Prisma } from '@pokemon-center/prisma';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';

@InputType()
export class BerriesCreateNestedOneWithoutFlavorsInput {

    @Field(() => BerriesCreateWithoutFlavorsInput, {nullable:true})
    @Type(() => BerriesCreateWithoutFlavorsInput)
    create?: Identity<BerriesCreateWithoutFlavorsInput>;

    @Field(() => BerriesCreateOrConnectWithoutFlavorsInput, {nullable:true})
    @Type(() => BerriesCreateOrConnectWithoutFlavorsInput)
    connectOrCreate?: Identity<BerriesCreateOrConnectWithoutFlavorsInput>;

    @Field(() => BerriesWhereUniqueInput, {nullable:true})
    @Type(() => BerriesWhereUniqueInput)
    connect?: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;
}
