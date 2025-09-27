import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AbilitiesWhereInput } from './abilities-where.input';

@InputType()
export class AbilitiesListRelationFilter {

    @Field(() => AbilitiesWhereInput, {nullable:true})
    every?: AbilitiesWhereInput;

    @Field(() => AbilitiesWhereInput, {nullable:true})
    some?: AbilitiesWhereInput;

    @Field(() => AbilitiesWhereInput, {nullable:true})
    none?: AbilitiesWhereInput;
}
