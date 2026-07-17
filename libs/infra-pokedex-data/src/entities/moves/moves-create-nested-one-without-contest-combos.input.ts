import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutContestCombosInput } from './moves-create-without-contest-combos.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutContestCombosInput } from './moves-create-or-connect-without-contest-combos.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesCreateNestedOneWithoutContestCombosInput {

    @Field(() => MovesCreateWithoutContestCombosInput, {nullable:true})
    @Type(() => MovesCreateWithoutContestCombosInput)
    create?: MovesCreateWithoutContestCombosInput;

    @Field(() => MovesCreateOrConnectWithoutContestCombosInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutContestCombosInput)
    connectOrCreate?: MovesCreateOrConnectWithoutContestCombosInput;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;
}
