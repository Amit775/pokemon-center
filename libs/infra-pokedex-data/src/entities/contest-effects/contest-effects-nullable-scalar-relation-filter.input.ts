import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestEffectsWhereInput } from './contest-effects-where.input';

@InputType()
export class ContestEffectsNullableScalarRelationFilter {

    @Field(() => ContestEffectsWhereInput, {nullable:true})
    is?: ContestEffectsWhereInput;

    @Field(() => ContestEffectsWhereInput, {nullable:true})
    isNot?: ContestEffectsWhereInput;
}
