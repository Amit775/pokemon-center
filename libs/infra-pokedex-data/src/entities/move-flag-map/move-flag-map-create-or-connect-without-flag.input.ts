import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { MoveFlagMapCreateWithoutFlagInput } from './move-flag-map-create-without-flag.input';

@InputType()
export class MoveFlagMapCreateOrConnectWithoutFlagInput {

    @Field(() => MoveFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => MoveFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>;

    @Field(() => MoveFlagMapCreateWithoutFlagInput, {nullable:false})
    @Type(() => MoveFlagMapCreateWithoutFlagInput)
    create!: MoveFlagMapCreateWithoutFlagInput;
}
