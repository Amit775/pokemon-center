import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AbilitiesWhereInput } from './abilities-where.input';

@InputType()
export class AbilitiesScalarRelationFilter {

    @Field(() => AbilitiesWhereInput, {nullable:true})
    is?: AbilitiesWhereInput;

    @Field(() => AbilitiesWhereInput, {nullable:true})
    isNot?: AbilitiesWhereInput;
}
