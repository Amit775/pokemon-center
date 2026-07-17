import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TypeEfficacyUncheckedUpdateWithoutTargetTypeInput {

    @Field(() => Int, {nullable:true})
    damage_type_id?: number;

    @Field(() => Int, {nullable:true})
    damage_factor?: number;
}
