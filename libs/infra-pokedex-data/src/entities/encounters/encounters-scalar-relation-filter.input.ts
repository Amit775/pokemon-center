import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersWhereInput } from './encounters-where.input';

@InputType()
export class EncountersScalarRelationFilter {

    @Field(() => EncountersWhereInput, {nullable:true})
    is?: Identity<EncountersWhereInput>;

    @Field(() => EncountersWhereInput, {nullable:true})
    isNot?: Identity<EncountersWhereInput>;
}
