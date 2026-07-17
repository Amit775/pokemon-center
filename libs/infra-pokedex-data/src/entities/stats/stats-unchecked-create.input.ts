import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonStatsUncheckedCreateNestedManyWithoutStatInput } from '../pokemon-stats/pokemon-stats-unchecked-create-nested-many-without-stat.input';
import { MoveMetaStatChangesUncheckedCreateNestedManyWithoutStatInput } from '../move-meta-stat-changes/move-meta-stat-changes-unchecked-create-nested-many-without-stat.input';
import { CharacteristicsUncheckedCreateNestedManyWithoutStatInput } from '../characteristics/characteristics-unchecked-create-nested-many-without-stat.input';
import { NaturesUncheckedCreateNestedManyWithoutDecreasedStatInput } from '../natures/natures-unchecked-create-nested-many-without-decreased-stat.input';
import { NaturesUncheckedCreateNestedManyWithoutIncreasedStatInput } from '../natures/natures-unchecked-create-nested-many-without-increased-stat.input';

@InputType()
export class StatsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    damage_class_id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_battle_only!: number;

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => PokemonStatsUncheckedCreateNestedManyWithoutStatInput, {nullable:true})
    pokemonStats?: PokemonStatsUncheckedCreateNestedManyWithoutStatInput;

    @Field(() => MoveMetaStatChangesUncheckedCreateNestedManyWithoutStatInput, {nullable:true})
    moveMetaStatChanges?: MoveMetaStatChangesUncheckedCreateNestedManyWithoutStatInput;

    @Field(() => CharacteristicsUncheckedCreateNestedManyWithoutStatInput, {nullable:true})
    characteristics?: CharacteristicsUncheckedCreateNestedManyWithoutStatInput;

    @Field(() => NaturesUncheckedCreateNestedManyWithoutDecreasedStatInput, {nullable:true})
    naturesDecreased?: NaturesUncheckedCreateNestedManyWithoutDecreasedStatInput;

    @Field(() => NaturesUncheckedCreateNestedManyWithoutIncreasedStatInput, {nullable:true})
    naturesIncreased?: NaturesUncheckedCreateNestedManyWithoutIncreasedStatInput;
}
