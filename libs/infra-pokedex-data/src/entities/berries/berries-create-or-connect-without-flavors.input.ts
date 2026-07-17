import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { BerriesCreateWithoutFlavorsInput } from './berries-create-without-flavors.input';

@InputType()
export class BerriesCreateOrConnectWithoutFlavorsInput {

    @Field(() => BerriesWhereUniqueInput, {nullable:false})
    @Type(() => BerriesWhereUniqueInput)
    where!: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => BerriesCreateWithoutFlavorsInput, {nullable:false})
    @Type(() => BerriesCreateWithoutFlavorsInput)
    create!: Identity<BerriesCreateWithoutFlavorsInput>;
}
