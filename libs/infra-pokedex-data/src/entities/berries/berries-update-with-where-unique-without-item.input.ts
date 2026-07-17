import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { BerriesUpdateWithoutItemInput } from './berries-update-without-item.input';

@InputType()
export class BerriesUpdateWithWhereUniqueWithoutItemInput {

    @Field(() => BerriesWhereUniqueInput, {nullable:false})
    @Type(() => BerriesWhereUniqueInput)
    where!: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => BerriesUpdateWithoutItemInput, {nullable:false})
    @Type(() => BerriesUpdateWithoutItemInput)
    data!: Identity<BerriesUpdateWithoutItemInput>;
}
