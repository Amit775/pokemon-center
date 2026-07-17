import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutSuperContestCombosSecondInput } from './moves-create-without-super-contest-combos-second.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutSuperContestCombosSecondInput } from './moves-create-or-connect-without-super-contest-combos-second.input';
import { MovesUpsertWithoutSuperContestCombosSecondInput } from './moves-upsert-without-super-contest-combos-second.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateToOneWithWhereWithoutSuperContestCombosSecondInput } from './moves-update-to-one-with-where-without-super-contest-combos-second.input';

@InputType()
export class MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput {

    @Field(() => MovesCreateWithoutSuperContestCombosSecondInput, {nullable:true})
    @Type(() => MovesCreateWithoutSuperContestCombosSecondInput)
    create?: Identity<MovesCreateWithoutSuperContestCombosSecondInput>;

    @Field(() => MovesCreateOrConnectWithoutSuperContestCombosSecondInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutSuperContestCombosSecondInput)
    connectOrCreate?: Identity<MovesCreateOrConnectWithoutSuperContestCombosSecondInput>;

    @Field(() => MovesUpsertWithoutSuperContestCombosSecondInput, {nullable:true})
    @Type(() => MovesUpsertWithoutSuperContestCombosSecondInput)
    upsert?: Identity<MovesUpsertWithoutSuperContestCombosSecondInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateToOneWithWhereWithoutSuperContestCombosSecondInput, {nullable:true})
    @Type(() => MovesUpdateToOneWithWhereWithoutSuperContestCombosSecondInput)
    update?: Identity<MovesUpdateToOneWithWhereWithoutSuperContestCombosSecondInput>;
}
