import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestTypesCreateWithoutMovesInput } from './contest-types-create-without-moves.input';
import { Type } from 'class-transformer';
import { ContestTypesCreateOrConnectWithoutMovesInput } from './contest-types-create-or-connect-without-moves.input';
import { Prisma } from '@prisma/client';
import { ContestTypesWhereUniqueInput } from './contest-types-where-unique.input';

@InputType()
export class ContestTypesCreateNestedOneWithoutMovesInput {

    @Field(() => ContestTypesCreateWithoutMovesInput, {nullable:true})
    @Type(() => ContestTypesCreateWithoutMovesInput)
    create?: ContestTypesCreateWithoutMovesInput;

    @Field(() => ContestTypesCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => ContestTypesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: ContestTypesCreateOrConnectWithoutMovesInput;

    @Field(() => ContestTypesWhereUniqueInput, {nullable:true})
    @Type(() => ContestTypesWhereUniqueInput)
    connect?: Prisma.AtLeast<ContestTypesWhereUniqueInput, 'id'>;
}
