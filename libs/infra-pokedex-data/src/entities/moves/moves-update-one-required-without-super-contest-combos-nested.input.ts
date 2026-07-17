import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutSuperContestCombosInput } from './moves-create-without-super-contest-combos.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutSuperContestCombosInput } from './moves-create-or-connect-without-super-contest-combos.input';
import { MovesUpsertWithoutSuperContestCombosInput } from './moves-upsert-without-super-contest-combos.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateToOneWithWhereWithoutSuperContestCombosInput } from './moves-update-to-one-with-where-without-super-contest-combos.input';

@InputType()
export class MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput {

    @Field(() => MovesCreateWithoutSuperContestCombosInput, {nullable:true})
    @Type(() => MovesCreateWithoutSuperContestCombosInput)
    create?: Identity<MovesCreateWithoutSuperContestCombosInput>;

    @Field(() => MovesCreateOrConnectWithoutSuperContestCombosInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutSuperContestCombosInput)
    connectOrCreate?: Identity<MovesCreateOrConnectWithoutSuperContestCombosInput>;

    @Field(() => MovesUpsertWithoutSuperContestCombosInput, {nullable:true})
    @Type(() => MovesUpsertWithoutSuperContestCombosInput)
    upsert?: Identity<MovesUpsertWithoutSuperContestCombosInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateToOneWithWhereWithoutSuperContestCombosInput, {nullable:true})
    @Type(() => MovesUpdateToOneWithWhereWithoutSuperContestCombosInput)
    update?: Identity<MovesUpdateToOneWithWhereWithoutSuperContestCombosInput>;
}
