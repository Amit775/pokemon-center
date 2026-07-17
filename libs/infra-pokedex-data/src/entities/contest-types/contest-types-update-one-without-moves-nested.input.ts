import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestTypesCreateWithoutMovesInput } from './contest-types-create-without-moves.input';
import { Type } from 'class-transformer';
import { ContestTypesCreateOrConnectWithoutMovesInput } from './contest-types-create-or-connect-without-moves.input';
import { ContestTypesUpsertWithoutMovesInput } from './contest-types-upsert-without-moves.input';
import { ContestTypesWhereInput } from './contest-types-where.input';
import { Prisma } from '@pokemon-center/prisma';
import { ContestTypesWhereUniqueInput } from './contest-types-where-unique.input';
import { ContestTypesUpdateToOneWithWhereWithoutMovesInput } from './contest-types-update-to-one-with-where-without-moves.input';

@InputType()
export class ContestTypesUpdateOneWithoutMovesNestedInput {

    @Field(() => ContestTypesCreateWithoutMovesInput, {nullable:true})
    @Type(() => ContestTypesCreateWithoutMovesInput)
    create?: Identity<ContestTypesCreateWithoutMovesInput>;

    @Field(() => ContestTypesCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => ContestTypesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Identity<ContestTypesCreateOrConnectWithoutMovesInput>;

    @Field(() => ContestTypesUpsertWithoutMovesInput, {nullable:true})
    @Type(() => ContestTypesUpsertWithoutMovesInput)
    upsert?: Identity<ContestTypesUpsertWithoutMovesInput>;

    @Field(() => ContestTypesWhereInput, {nullable:true})
    @Type(() => ContestTypesWhereInput)
    disconnect?: Identity<ContestTypesWhereInput>;

    @Field(() => ContestTypesWhereInput, {nullable:true})
    @Type(() => ContestTypesWhereInput)
    delete?: Identity<ContestTypesWhereInput>;

    @Field(() => ContestTypesWhereUniqueInput, {nullable:true})
    @Type(() => ContestTypesWhereUniqueInput)
    connect?: Prisma.AtLeast<ContestTypesWhereUniqueInput, 'id'>;

    @Field(() => ContestTypesUpdateToOneWithWhereWithoutMovesInput, {nullable:true})
    @Type(() => ContestTypesUpdateToOneWithWhereWithoutMovesInput)
    update?: Identity<ContestTypesUpdateToOneWithWhereWithoutMovesInput>;
}
