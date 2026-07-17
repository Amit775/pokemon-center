import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveFlagMapUpdateWithoutFlagInput } from './move-flag-map-update-without-flag.input';

@InputType()
export class MoveFlagMapUpdateWithWhereUniqueWithoutFlagInput {

    @Field(() => MoveFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => MoveFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>;

    @Field(() => MoveFlagMapUpdateWithoutFlagInput, {nullable:false})
    @Type(() => MoveFlagMapUpdateWithoutFlagInput)
    data!: Identity<MoveFlagMapUpdateWithoutFlagInput>;
}
