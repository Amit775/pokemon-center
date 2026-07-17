import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutSuperContestEffectInput } from './moves-create-without-super-contest-effect.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutSuperContestEffectInput } from './moves-create-or-connect-without-super-contest-effect.input';
import type { Identity } from 'identity-type';
import { MovesCreateManySuperContestEffectInputEnvelope } from './moves-create-many-super-contest-effect-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesCreateNestedManyWithoutSuperContestEffectInput {

    @Field(() => [MovesCreateWithoutSuperContestEffectInput], {nullable:true})
    @Type(() => MovesCreateWithoutSuperContestEffectInput)
    create?: Array<MovesCreateWithoutSuperContestEffectInput>;

    @Field(() => [MovesCreateOrConnectWithoutSuperContestEffectInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutSuperContestEffectInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutSuperContestEffectInput>;

    @Field(() => MovesCreateManySuperContestEffectInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManySuperContestEffectInputEnvelope)
    createMany?: Identity<MovesCreateManySuperContestEffectInputEnvelope>;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;
}
