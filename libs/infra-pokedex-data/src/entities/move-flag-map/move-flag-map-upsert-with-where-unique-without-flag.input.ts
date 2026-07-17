import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { MoveFlagMapUpdateWithoutFlagInput } from './move-flag-map-update-without-flag.input';
import { MoveFlagMapCreateWithoutFlagInput } from './move-flag-map-create-without-flag.input';

@InputType()
export class MoveFlagMapUpsertWithWhereUniqueWithoutFlagInput {

    @Field(() => MoveFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => MoveFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>;

    @Field(() => MoveFlagMapUpdateWithoutFlagInput, {nullable:false})
    @Type(() => MoveFlagMapUpdateWithoutFlagInput)
    update!: MoveFlagMapUpdateWithoutFlagInput;

    @Field(() => MoveFlagMapCreateWithoutFlagInput, {nullable:false})
    @Type(() => MoveFlagMapCreateWithoutFlagInput)
    create!: MoveFlagMapCreateWithoutFlagInput;
}
