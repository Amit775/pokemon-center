import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { AbilitiesWhereInput } from './abilities-where.input';

@InputType()
export class AbilitiesListRelationFilter {

    @Field(() => AbilitiesWhereInput, {nullable:true})
    every?: Identity<AbilitiesWhereInput>;

    @Field(() => AbilitiesWhereInput, {nullable:true})
    some?: Identity<AbilitiesWhereInput>;

    @Field(() => AbilitiesWhereInput, {nullable:true})
    none?: Identity<AbilitiesWhereInput>;
}
