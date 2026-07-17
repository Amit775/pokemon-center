import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutContestCombosInput } from './moves-create-without-contest-combos.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutContestCombosInput } from './moves-create-or-connect-without-contest-combos.input';
import { MovesUpsertWithoutContestCombosInput } from './moves-upsert-without-contest-combos.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateToOneWithWhereWithoutContestCombosInput } from './moves-update-to-one-with-where-without-contest-combos.input';

@InputType()
export class MovesUpdateOneRequiredWithoutContestCombosNestedInput {

    @Field(() => MovesCreateWithoutContestCombosInput, {nullable:true})
    @Type(() => MovesCreateWithoutContestCombosInput)
    create?: Identity<MovesCreateWithoutContestCombosInput>;

    @Field(() => MovesCreateOrConnectWithoutContestCombosInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutContestCombosInput)
    connectOrCreate?: Identity<MovesCreateOrConnectWithoutContestCombosInput>;

    @Field(() => MovesUpsertWithoutContestCombosInput, {nullable:true})
    @Type(() => MovesUpsertWithoutContestCombosInput)
    upsert?: Identity<MovesUpsertWithoutContestCombosInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateToOneWithWhereWithoutContestCombosInput, {nullable:true})
    @Type(() => MovesUpdateToOneWithWhereWithoutContestCombosInput)
    update?: Identity<MovesUpdateToOneWithWhereWithoutContestCombosInput>;
}
