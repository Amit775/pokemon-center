import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutContestCombosSecondInput } from './moves-create-without-contest-combos-second.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutContestCombosSecondInput } from './moves-create-or-connect-without-contest-combos-second.input';
import { MovesUpsertWithoutContestCombosSecondInput } from './moves-upsert-without-contest-combos-second.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateToOneWithWhereWithoutContestCombosSecondInput } from './moves-update-to-one-with-where-without-contest-combos-second.input';

@InputType()
export class MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput {

    @Field(() => MovesCreateWithoutContestCombosSecondInput, {nullable:true})
    @Type(() => MovesCreateWithoutContestCombosSecondInput)
    create?: Identity<MovesCreateWithoutContestCombosSecondInput>;

    @Field(() => MovesCreateOrConnectWithoutContestCombosSecondInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutContestCombosSecondInput)
    connectOrCreate?: Identity<MovesCreateOrConnectWithoutContestCombosSecondInput>;

    @Field(() => MovesUpsertWithoutContestCombosSecondInput, {nullable:true})
    @Type(() => MovesUpsertWithoutContestCombosSecondInput)
    upsert?: Identity<MovesUpsertWithoutContestCombosSecondInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateToOneWithWhereWithoutContestCombosSecondInput, {nullable:true})
    @Type(() => MovesUpdateToOneWithWhereWithoutContestCombosSecondInput)
    update?: Identity<MovesUpdateToOneWithWhereWithoutContestCombosSecondInput>;
}
