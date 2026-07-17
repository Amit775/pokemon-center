import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestTypesUpdateWithoutMovesInput } from './contest-types-update-without-moves.input';
import { Type } from 'class-transformer';
import { ContestTypesCreateWithoutMovesInput } from './contest-types-create-without-moves.input';
import { ContestTypesWhereInput } from './contest-types-where.input';

@InputType()
export class ContestTypesUpsertWithoutMovesInput {

    @Field(() => ContestTypesUpdateWithoutMovesInput, {nullable:false})
    @Type(() => ContestTypesUpdateWithoutMovesInput)
    update!: ContestTypesUpdateWithoutMovesInput;

    @Field(() => ContestTypesCreateWithoutMovesInput, {nullable:false})
    @Type(() => ContestTypesCreateWithoutMovesInput)
    create!: ContestTypesCreateWithoutMovesInput;

    @Field(() => ContestTypesWhereInput, {nullable:true})
    @Type(() => ContestTypesWhereInput)
    where?: ContestTypesWhereInput;
}
