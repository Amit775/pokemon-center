import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TypeEfficacyMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    damage_type_id?: true;

    @Field(() => Boolean, {nullable:true})
    target_type_id?: true;

    @Field(() => Boolean, {nullable:true})
    damage_factor?: true;
}
