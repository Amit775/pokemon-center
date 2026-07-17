import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutContestTypeInput } from './moves-create-without-contest-type.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutContestTypeInput } from './moves-create-or-connect-without-contest-type.input';
import { MovesUpsertWithWhereUniqueWithoutContestTypeInput } from './moves-upsert-with-where-unique-without-contest-type.input';
import type { Identity } from 'identity-type';
import { MovesCreateManyContestTypeInputEnvelope } from './moves-create-many-contest-type-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateWithWhereUniqueWithoutContestTypeInput } from './moves-update-with-where-unique-without-contest-type.input';
import { MovesUpdateManyWithWhereWithoutContestTypeInput } from './moves-update-many-with-where-without-contest-type.input';
import { MovesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class MovesUncheckedUpdateManyWithoutContestTypeNestedInput {

    @Field(() => [MovesCreateWithoutContestTypeInput], {nullable:true})
    @Type(() => MovesCreateWithoutContestTypeInput)
    create?: Array<MovesCreateWithoutContestTypeInput>;

    @Field(() => [MovesCreateOrConnectWithoutContestTypeInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutContestTypeInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutContestTypeInput>;

    @Field(() => [MovesUpsertWithWhereUniqueWithoutContestTypeInput], {nullable:true})
    @Type(() => MovesUpsertWithWhereUniqueWithoutContestTypeInput)
    upsert?: Array<MovesUpsertWithWhereUniqueWithoutContestTypeInput>;

    @Field(() => MovesCreateManyContestTypeInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManyContestTypeInputEnvelope)
    createMany?: Identity<MovesCreateManyContestTypeInputEnvelope>;

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

    @Field(() => [MovesUpdateWithWhereUniqueWithoutContestTypeInput], {nullable:true})
    @Type(() => MovesUpdateWithWhereUniqueWithoutContestTypeInput)
    update?: Array<MovesUpdateWithWhereUniqueWithoutContestTypeInput>;

    @Field(() => [MovesUpdateManyWithWhereWithoutContestTypeInput], {nullable:true})
    @Type(() => MovesUpdateManyWithWhereWithoutContestTypeInput)
    updateMany?: Array<MovesUpdateManyWithWhereWithoutContestTypeInput>;

    @Field(() => [MovesScalarWhereInput], {nullable:true})
    @Type(() => MovesScalarWhereInput)
    deleteMany?: Array<MovesScalarWhereInput>;
}
