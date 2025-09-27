import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersWhereInput } from './encounters-where.input';

@InputType()
export class EncountersScalarRelationFilter {

    @Field(() => EncountersWhereInput, {nullable:true})
    is?: EncountersWhereInput;

    @Field(() => EncountersWhereInput, {nullable:true})
    isNot?: EncountersWhereInput;
}
