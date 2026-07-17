import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveFlagMapUpdateWithoutMoveInput } from './move-flag-map-update-without-move.input';
import { MoveFlagMapCreateWithoutMoveInput } from './move-flag-map-create-without-move.input';

@InputType()
export class MoveFlagMapUpsertWithWhereUniqueWithoutMoveInput {

    @Field(() => MoveFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => MoveFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>;

    @Field(() => MoveFlagMapUpdateWithoutMoveInput, {nullable:false})
    @Type(() => MoveFlagMapUpdateWithoutMoveInput)
    update!: Identity<MoveFlagMapUpdateWithoutMoveInput>;

    @Field(() => MoveFlagMapCreateWithoutMoveInput, {nullable:false})
    @Type(() => MoveFlagMapCreateWithoutMoveInput)
    create!: Identity<MoveFlagMapCreateWithoutMoveInput>;
}
