import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutSuperContestCombosInput } from './moves-create-without-super-contest-combos.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutSuperContestCombosInput } from './moves-create-or-connect-without-super-contest-combos.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesCreateNestedOneWithoutSuperContestCombosInput {

    @Field(() => MovesCreateWithoutSuperContestCombosInput, {nullable:true})
    @Type(() => MovesCreateWithoutSuperContestCombosInput)
    create?: Identity<MovesCreateWithoutSuperContestCombosInput>;

    @Field(() => MovesCreateOrConnectWithoutSuperContestCombosInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutSuperContestCombosInput)
    connectOrCreate?: Identity<MovesCreateOrConnectWithoutSuperContestCombosInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;
}
