import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsUpdateOneRequiredWithoutCharacteristicsNestedInput } from '../stats/stats-update-one-required-without-characteristics-nested.input';

@InputType()
export class CharacteristicsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    gene_mod_5?: number;

    @Field(() => StatsUpdateOneRequiredWithoutCharacteristicsNestedInput, {nullable:true})
    stat?: Identity<StatsUpdateOneRequiredWithoutCharacteristicsNestedInput>;
}
