import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveFlagMapCreateWithoutFlagInput } from './move-flag-map-create-without-flag.input';
import { Type } from 'class-transformer';
import { MoveFlagMapCreateOrConnectWithoutFlagInput } from './move-flag-map-create-or-connect-without-flag.input';
import { MoveFlagMapCreateManyFlagInputEnvelope } from './move-flag-map-create-many-flag-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';

@InputType()
export class MoveFlagMapCreateNestedManyWithoutFlagInput {

    @Field(() => [MoveFlagMapCreateWithoutFlagInput], {nullable:true})
    @Type(() => MoveFlagMapCreateWithoutFlagInput)
    create?: Array<MoveFlagMapCreateWithoutFlagInput>;

    @Field(() => [MoveFlagMapCreateOrConnectWithoutFlagInput], {nullable:true})
    @Type(() => MoveFlagMapCreateOrConnectWithoutFlagInput)
    connectOrCreate?: Array<MoveFlagMapCreateOrConnectWithoutFlagInput>;

    @Field(() => MoveFlagMapCreateManyFlagInputEnvelope, {nullable:true})
    @Type(() => MoveFlagMapCreateManyFlagInputEnvelope)
    createMany?: MoveFlagMapCreateManyFlagInputEnvelope;

    @Field(() => [MoveFlagMapWhereUniqueInput], {nullable:true})
    @Type(() => MoveFlagMapWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>>;
}
