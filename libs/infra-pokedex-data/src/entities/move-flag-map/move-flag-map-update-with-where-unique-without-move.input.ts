import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveFlagMapUpdateWithoutMoveInput } from './move-flag-map-update-without-move.input';

@InputType()
export class MoveFlagMapUpdateWithWhereUniqueWithoutMoveInput {

    @Field(() => MoveFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => MoveFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>;

    @Field(() => MoveFlagMapUpdateWithoutMoveInput, {nullable:false})
    @Type(() => MoveFlagMapUpdateWithoutMoveInput)
    data!: Identity<MoveFlagMapUpdateWithoutMoveInput>;
}
