import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionsCreateNestedOneWithoutEncountersInput } from '../versions/versions-create-nested-one-without-encounters.input';
import { LocationAreasCreateNestedOneWithoutEncountersInput } from '../location-areas/location-areas-create-nested-one-without-encounters.input';
import { PokemonCreateNestedOneWithoutEncountersInput } from '../pokemon/pokemon-create-nested-one-without-encounters.input';
import { EncounterConditionValueMapCreateNestedManyWithoutEncounterInput } from '../encounter-condition-value-map/encounter-condition-value-map-create-nested-many-without-encounter.input';

@InputType()
export class EncountersCreateWithoutEncounterSlotInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    min_level!: number;

    @Field(() => Int, {nullable:false})
    max_level!: number;

    @Field(() => VersionsCreateNestedOneWithoutEncountersInput, {nullable:false})
    version!: VersionsCreateNestedOneWithoutEncountersInput;

    @Field(() => LocationAreasCreateNestedOneWithoutEncountersInput, {nullable:false})
    locationArea!: LocationAreasCreateNestedOneWithoutEncountersInput;

    @Field(() => PokemonCreateNestedOneWithoutEncountersInput, {nullable:false})
    pokemon!: PokemonCreateNestedOneWithoutEncountersInput;

    @Field(() => EncounterConditionValueMapCreateNestedManyWithoutEncounterInput, {nullable:true})
    conditionValueMap?: EncounterConditionValueMapCreateNestedManyWithoutEncounterInput;
}
