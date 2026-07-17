import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutSuperContestCombosSecondInput } from './moves-create-without-super-contest-combos-second.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutSuperContestCombosSecondInput } from './moves-create-or-connect-without-super-contest-combos-second.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesCreateNestedOneWithoutSuperContestCombosSecondInput {

    @Field(() => MovesCreateWithoutSuperContestCombosSecondInput, {nullable:true})
    @Type(() => MovesCreateWithoutSuperContestCombosSecondInput)
    create?: Identity<MovesCreateWithoutSuperContestCombosSecondInput>;

    @Field(() => MovesCreateOrConnectWithoutSuperContestCombosSecondInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutSuperContestCombosSecondInput)
    connectOrCreate?: Identity<MovesCreateOrConnectWithoutSuperContestCombosSecondInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;
}
