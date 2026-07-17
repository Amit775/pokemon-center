import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutContestEffectInput } from './moves-create-without-contest-effect.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutContestEffectInput } from './moves-create-or-connect-without-contest-effect.input';
import { MovesUpsertWithWhereUniqueWithoutContestEffectInput } from './moves-upsert-with-where-unique-without-contest-effect.input';
import { MovesCreateManyContestEffectInputEnvelope } from './moves-create-many-contest-effect-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateWithWhereUniqueWithoutContestEffectInput } from './moves-update-with-where-unique-without-contest-effect.input';
import { MovesUpdateManyWithWhereWithoutContestEffectInput } from './moves-update-many-with-where-without-contest-effect.input';
import { MovesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class MovesUncheckedUpdateManyWithoutContestEffectNestedInput {

    @Field(() => [MovesCreateWithoutContestEffectInput], {nullable:true})
    @Type(() => MovesCreateWithoutContestEffectInput)
    create?: Array<MovesCreateWithoutContestEffectInput>;

    @Field(() => [MovesCreateOrConnectWithoutContestEffectInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutContestEffectInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutContestEffectInput>;

    @Field(() => [MovesUpsertWithWhereUniqueWithoutContestEffectInput], {nullable:true})
    @Type(() => MovesUpsertWithWhereUniqueWithoutContestEffectInput)
    upsert?: Array<MovesUpsertWithWhereUniqueWithoutContestEffectInput>;

    @Field(() => MovesCreateManyContestEffectInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManyContestEffectInputEnvelope)
    createMany?: MovesCreateManyContestEffectInputEnvelope;

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

    @Field(() => [MovesUpdateWithWhereUniqueWithoutContestEffectInput], {nullable:true})
    @Type(() => MovesUpdateWithWhereUniqueWithoutContestEffectInput)
    update?: Array<MovesUpdateWithWhereUniqueWithoutContestEffectInput>;

    @Field(() => [MovesUpdateManyWithWhereWithoutContestEffectInput], {nullable:true})
    @Type(() => MovesUpdateManyWithWhereWithoutContestEffectInput)
    updateMany?: Array<MovesUpdateManyWithWhereWithoutContestEffectInput>;

    @Field(() => [MovesScalarWhereInput], {nullable:true})
    @Type(() => MovesScalarWhereInput)
    deleteMany?: Array<MovesScalarWhereInput>;
}
