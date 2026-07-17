import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestTypesWhereInput } from './contest-types-where.input';
import { Type } from 'class-transformer';
import { ContestTypesUpdateWithoutMovesInput } from './contest-types-update-without-moves.input';

@InputType()
export class ContestTypesUpdateToOneWithWhereWithoutMovesInput {

    @Field(() => ContestTypesWhereInput, {nullable:true})
    @Type(() => ContestTypesWhereInput)
    where?: ContestTypesWhereInput;

    @Field(() => ContestTypesUpdateWithoutMovesInput, {nullable:false})
    @Type(() => ContestTypesUpdateWithoutMovesInput)
    data!: ContestTypesUpdateWithoutMovesInput;
}
