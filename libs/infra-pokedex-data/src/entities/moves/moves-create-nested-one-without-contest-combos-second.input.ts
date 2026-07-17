import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutContestCombosSecondInput } from './moves-create-without-contest-combos-second.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutContestCombosSecondInput } from './moves-create-or-connect-without-contest-combos-second.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesCreateNestedOneWithoutContestCombosSecondInput {

    @Field(() => MovesCreateWithoutContestCombosSecondInput, {nullable:true})
    @Type(() => MovesCreateWithoutContestCombosSecondInput)
    create?: MovesCreateWithoutContestCombosSecondInput;

    @Field(() => MovesCreateOrConnectWithoutContestCombosSecondInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutContestCombosSecondInput)
    connectOrCreate?: MovesCreateOrConnectWithoutContestCombosSecondInput;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;
}
