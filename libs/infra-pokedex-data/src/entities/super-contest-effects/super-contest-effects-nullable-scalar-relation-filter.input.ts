import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SuperContestEffectsWhereInput } from './super-contest-effects-where.input';

@InputType()
export class SuperContestEffectsNullableScalarRelationFilter {

    @Field(() => SuperContestEffectsWhereInput, {nullable:true})
    is?: SuperContestEffectsWhereInput;

    @Field(() => SuperContestEffectsWhereInput, {nullable:true})
    isNot?: SuperContestEffectsWhereInput;
}
