import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { AbilitiesWhereInput } from './abilities-where.input';

@InputType()
export class AbilitiesScalarRelationFilter {

    @Field(() => AbilitiesWhereInput, {nullable:true})
    is?: Identity<AbilitiesWhereInput>;

    @Field(() => AbilitiesWhereInput, {nullable:true})
    isNot?: Identity<AbilitiesWhereInput>;
}
