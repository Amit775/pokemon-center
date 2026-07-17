import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersWhereInput } from './encounters-where.input';

@InputType()
export class EncountersListRelationFilter {

    @Field(() => EncountersWhereInput, {nullable:true})
    every?: Identity<EncountersWhereInput>;

    @Field(() => EncountersWhereInput, {nullable:true})
    some?: Identity<EncountersWhereInput>;

    @Field(() => EncountersWhereInput, {nullable:true})
    none?: Identity<EncountersWhereInput>;
}
