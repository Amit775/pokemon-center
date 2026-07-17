import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContestTypesWhereUniqueInput } from './contest-types-where-unique.input';
import { Type } from 'class-transformer';
import { ContestTypesCreateWithoutMovesInput } from './contest-types-create-without-moves.input';

@InputType()
export class ContestTypesCreateOrConnectWithoutMovesInput {

    @Field(() => ContestTypesWhereUniqueInput, {nullable:false})
    @Type(() => ContestTypesWhereUniqueInput)
    where!: Prisma.AtLeast<ContestTypesWhereUniqueInput, 'id'>;

    @Field(() => ContestTypesCreateWithoutMovesInput, {nullable:false})
    @Type(() => ContestTypesCreateWithoutMovesInput)
    create!: ContestTypesCreateWithoutMovesInput;
}
