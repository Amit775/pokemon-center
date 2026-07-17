import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutContestCombosSecondInput } from './moves-create-without-contest-combos-second.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutContestCombosSecondInput } from './moves-create-or-connect-without-contest-combos-second.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesCreateNestedOneWithoutContestCombosSecondInput {

    @Field(() => MovesCreateWithoutContestCombosSecondInput, {nullable:true})
    @Type(() => MovesCreateWithoutContestCombosSecondInput)
    create?: Identity<MovesCreateWithoutContestCombosSecondInput>;

    @Field(() => MovesCreateOrConnectWithoutContestCombosSecondInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutContestCombosSecondInput)
    connectOrCreate?: Identity<MovesCreateOrConnectWithoutContestCombosSecondInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;
}
