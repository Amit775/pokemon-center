import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TypeEfficacyUpdateManyMutationInput {

    @Field(() => Int, {nullable:true})
    damage_factor?: number;
}
