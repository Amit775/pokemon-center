import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutSuperContestEffectInput } from './moves-create-without-super-contest-effect.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutSuperContestEffectInput } from './moves-create-or-connect-without-super-contest-effect.input';
import { MovesCreateManySuperContestEffectInputEnvelope } from './moves-create-many-super-contest-effect-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesUncheckedCreateNestedManyWithoutSuperContestEffectInput {

    @Field(() => [MovesCreateWithoutSuperContestEffectInput], {nullable:true})
    @Type(() => MovesCreateWithoutSuperContestEffectInput)
    create?: Array<MovesCreateWithoutSuperContestEffectInput>;

    @Field(() => [MovesCreateOrConnectWithoutSuperContestEffectInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutSuperContestEffectInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutSuperContestEffectInput>;

    @Field(() => MovesCreateManySuperContestEffectInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManySuperContestEffectInputEnvelope)
    createMany?: MovesCreateManySuperContestEffectInputEnvelope;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;
}
