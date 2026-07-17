import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestTypesCreateWithoutMovesInput } from './contest-types-create-without-moves.input';
import { Type } from 'class-transformer';
import { ContestTypesCreateOrConnectWithoutMovesInput } from './contest-types-create-or-connect-without-moves.input';
import { Prisma } from '@pokemon-center/prisma';
import { ContestTypesWhereUniqueInput } from './contest-types-where-unique.input';

@InputType()
export class ContestTypesCreateNestedOneWithoutMovesInput {

    @Field(() => ContestTypesCreateWithoutMovesInput, {nullable:true})
    @Type(() => ContestTypesCreateWithoutMovesInput)
    create?: Identity<ContestTypesCreateWithoutMovesInput>;

    @Field(() => ContestTypesCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => ContestTypesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Identity<ContestTypesCreateOrConnectWithoutMovesInput>;

    @Field(() => ContestTypesWhereUniqueInput, {nullable:true})
    @Type(() => ContestTypesWhereUniqueInput)
    connect?: Prisma.AtLeast<ContestTypesWhereUniqueInput, 'id'>;
}
