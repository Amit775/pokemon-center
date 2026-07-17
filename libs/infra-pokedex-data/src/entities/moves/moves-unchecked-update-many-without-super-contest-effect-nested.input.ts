import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutSuperContestEffectInput } from './moves-create-without-super-contest-effect.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutSuperContestEffectInput } from './moves-create-or-connect-without-super-contest-effect.input';
import { MovesUpsertWithWhereUniqueWithoutSuperContestEffectInput } from './moves-upsert-with-where-unique-without-super-contest-effect.input';
import { MovesCreateManySuperContestEffectInputEnvelope } from './moves-create-many-super-contest-effect-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateWithWhereUniqueWithoutSuperContestEffectInput } from './moves-update-with-where-unique-without-super-contest-effect.input';
import { MovesUpdateManyWithWhereWithoutSuperContestEffectInput } from './moves-update-many-with-where-without-super-contest-effect.input';
import { MovesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class MovesUncheckedUpdateManyWithoutSuperContestEffectNestedInput {

    @Field(() => [MovesCreateWithoutSuperContestEffectInput], {nullable:true})
    @Type(() => MovesCreateWithoutSuperContestEffectInput)
    create?: Array<MovesCreateWithoutSuperContestEffectInput>;

    @Field(() => [MovesCreateOrConnectWithoutSuperContestEffectInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutSuperContestEffectInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutSuperContestEffectInput>;

    @Field(() => [MovesUpsertWithWhereUniqueWithoutSuperContestEffectInput], {nullable:true})
    @Type(() => MovesUpsertWithWhereUniqueWithoutSuperContestEffectInput)
    upsert?: Array<MovesUpsertWithWhereUniqueWithoutSuperContestEffectInput>;

    @Field(() => MovesCreateManySuperContestEffectInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManySuperContestEffectInputEnvelope)
    createMany?: MovesCreateManySuperContestEffectInputEnvelope;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;

    @Field(() => [MovesUpdateWithWhereUniqueWithoutSuperContestEffectInput], {nullable:true})
    @Type(() => MovesUpdateWithWhereUniqueWithoutSuperContestEffectInput)
    update?: Array<MovesUpdateWithWhereUniqueWithoutSuperContestEffectInput>;

    @Field(() => [MovesUpdateManyWithWhereWithoutSuperContestEffectInput], {nullable:true})
    @Type(() => MovesUpdateManyWithWhereWithoutSuperContestEffectInput)
    updateMany?: Array<MovesUpdateManyWithWhereWithoutSuperContestEffectInput>;

    @Field(() => [MovesScalarWhereInput], {nullable:true})
    @Type(() => MovesScalarWhereInput)
    deleteMany?: Array<MovesScalarWhereInput>;
}
