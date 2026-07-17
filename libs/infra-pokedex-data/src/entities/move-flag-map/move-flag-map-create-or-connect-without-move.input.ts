import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { MoveFlagMapCreateWithoutMoveInput } from './move-flag-map-create-without-move.input';

@InputType()
export class MoveFlagMapCreateOrConnectWithoutMoveInput {

    @Field(() => MoveFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => MoveFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>;

    @Field(() => MoveFlagMapCreateWithoutMoveInput, {nullable:false})
    @Type(() => MoveFlagMapCreateWithoutMoveInput)
    create!: MoveFlagMapCreateWithoutMoveInput;
}
