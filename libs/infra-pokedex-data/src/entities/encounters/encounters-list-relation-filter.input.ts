import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersWhereInput } from './encounters-where.input';

@InputType()
export class EncountersListRelationFilter {

    @Field(() => EncountersWhereInput, {nullable:true})
    every?: EncountersWhereInput;

    @Field(() => EncountersWhereInput, {nullable:true})
    some?: EncountersWhereInput;

    @Field(() => EncountersWhereInput, {nullable:true})
    none?: EncountersWhereInput;
}
