import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesCreateWithoutFlavorsInput } from './berries-create-without-flavors.input';
import { Type } from 'class-transformer';
import { BerriesCreateOrConnectWithoutFlavorsInput } from './berries-create-or-connect-without-flavors.input';
import { BerriesUpsertWithoutFlavorsInput } from './berries-upsert-without-flavors.input';
import { Prisma } from '@pokemon-center/prisma';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { BerriesUpdateToOneWithWhereWithoutFlavorsInput } from './berries-update-to-one-with-where-without-flavors.input';

@InputType()
export class BerriesUpdateOneRequiredWithoutFlavorsNestedInput {

    @Field(() => BerriesCreateWithoutFlavorsInput, {nullable:true})
    @Type(() => BerriesCreateWithoutFlavorsInput)
    create?: Identity<BerriesCreateWithoutFlavorsInput>;

    @Field(() => BerriesCreateOrConnectWithoutFlavorsInput, {nullable:true})
    @Type(() => BerriesCreateOrConnectWithoutFlavorsInput)
    connectOrCreate?: Identity<BerriesCreateOrConnectWithoutFlavorsInput>;

    @Field(() => BerriesUpsertWithoutFlavorsInput, {nullable:true})
    @Type(() => BerriesUpsertWithoutFlavorsInput)
    upsert?: Identity<BerriesUpsertWithoutFlavorsInput>;

    @Field(() => BerriesWhereUniqueInput, {nullable:true})
    @Type(() => BerriesWhereUniqueInput)
    connect?: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => BerriesUpdateToOneWithWhereWithoutFlavorsInput, {nullable:true})
    @Type(() => BerriesUpdateToOneWithWhereWithoutFlavorsInput)
    update?: Identity<BerriesUpdateToOneWithWhereWithoutFlavorsInput>;
}
