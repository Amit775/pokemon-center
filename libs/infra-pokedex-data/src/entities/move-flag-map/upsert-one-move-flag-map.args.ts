import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveFlagMapCreateInput } from './move-flag-map-create.input';
import { MoveFlagMapUpdateInput } from './move-flag-map-update.input';

@ArgsType()
export class UpsertOneMoveFlagMapArgs {

    @Field(() => MoveFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => MoveFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>;

    @Field(() => MoveFlagMapCreateInput, {nullable:false})
    @Type(() => MoveFlagMapCreateInput)
    create!: Identity<MoveFlagMapCreateInput>;

    @Field(() => MoveFlagMapUpdateInput, {nullable:false})
    @Type(() => MoveFlagMapUpdateInput)
    update!: Identity<MoveFlagMapUpdateInput>;
}
