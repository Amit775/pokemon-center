import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveFlagMapCreateWithoutMoveInput } from './move-flag-map-create-without-move.input';
import { Type } from 'class-transformer';
import { MoveFlagMapCreateOrConnectWithoutMoveInput } from './move-flag-map-create-or-connect-without-move.input';
import type { Identity } from 'identity-type';
import { MoveFlagMapCreateManyMoveInputEnvelope } from './move-flag-map-create-many-move-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';

@InputType()
export class MoveFlagMapCreateNestedManyWithoutMoveInput {

    @Field(() => [MoveFlagMapCreateWithoutMoveInput], {nullable:true})
    @Type(() => MoveFlagMapCreateWithoutMoveInput)
    create?: Array<MoveFlagMapCreateWithoutMoveInput>;

    @Field(() => [MoveFlagMapCreateOrConnectWithoutMoveInput], {nullable:true})
    @Type(() => MoveFlagMapCreateOrConnectWithoutMoveInput)
    connectOrCreate?: Array<MoveFlagMapCreateOrConnectWithoutMoveInput>;

    @Field(() => MoveFlagMapCreateManyMoveInputEnvelope, {nullable:true})
    @Type(() => MoveFlagMapCreateManyMoveInputEnvelope)
    createMany?: Identity<MoveFlagMapCreateManyMoveInputEnvelope>;

    @Field(() => [MoveFlagMapWhereUniqueInput], {nullable:true})
    @Type(() => MoveFlagMapWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>>;
}
