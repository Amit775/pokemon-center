import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutContestEffectInput } from './moves-create-without-contest-effect.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutContestEffectInput } from './moves-create-or-connect-without-contest-effect.input';
import type { Identity } from 'identity-type';
import { MovesCreateManyContestEffectInputEnvelope } from './moves-create-many-contest-effect-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesCreateNestedManyWithoutContestEffectInput {

    @Field(() => [MovesCreateWithoutContestEffectInput], {nullable:true})
    @Type(() => MovesCreateWithoutContestEffectInput)
    create?: Array<MovesCreateWithoutContestEffectInput>;

    @Field(() => [MovesCreateOrConnectWithoutContestEffectInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutContestEffectInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutContestEffectInput>;

    @Field(() => MovesCreateManyContestEffectInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManyContestEffectInputEnvelope)
    createMany?: Identity<MovesCreateManyContestEffectInputEnvelope>;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;
}
