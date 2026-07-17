import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NatureBattleStylePreferencesCreateManyBattleStyleInput {

    @Field(() => Int, {nullable:false})
    nature_id!: number;

    @Field(() => Int, {nullable:false})
    low_hp_preference!: number;

    @Field(() => Int, {nullable:false})
    high_hp_preference!: number;
}
