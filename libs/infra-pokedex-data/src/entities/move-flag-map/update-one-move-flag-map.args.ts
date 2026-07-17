import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagMapUpdateInput } from './move-flag-map-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';

@ArgsType()
export class UpdateOneMoveFlagMapArgs {

    @Field(() => MoveFlagMapUpdateInput, {nullable:false})
    @Type(() => MoveFlagMapUpdateInput)
    data!: Identity<MoveFlagMapUpdateInput>;

    @Field(() => MoveFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => MoveFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>;
}
