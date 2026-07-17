import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NatureBattleStylePreferencesUpdateManyMutationInput {

    @Field(() => Int, {nullable:true})
    low_hp_preference?: number;

    @Field(() => Int, {nullable:true})
    high_hp_preference?: number;
}
