import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { BerriesUpdateWithoutFirmnessInput } from './berries-update-without-firmness.input';
import { BerriesCreateWithoutFirmnessInput } from './berries-create-without-firmness.input';

@InputType()
export class BerriesUpsertWithWhereUniqueWithoutFirmnessInput {

    @Field(() => BerriesWhereUniqueInput, {nullable:false})
    @Type(() => BerriesWhereUniqueInput)
    where!: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => BerriesUpdateWithoutFirmnessInput, {nullable:false})
    @Type(() => BerriesUpdateWithoutFirmnessInput)
    update!: Identity<BerriesUpdateWithoutFirmnessInput>;

    @Field(() => BerriesCreateWithoutFirmnessInput, {nullable:false})
    @Type(() => BerriesCreateWithoutFirmnessInput)
    create!: Identity<BerriesCreateWithoutFirmnessInput>;
}
