import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { LocationsUpdateManyWithoutRegionNestedInput } from '../locations/locations-update-many-without-region-nested.input';
import { PokedexesUpdateManyWithoutRegionNestedInput } from '../pokedexes/pokedexes-update-many-without-region-nested.input';
import { VersionGroupRegionsUpdateManyWithoutRegionNestedInput } from '../version-group-regions/version-group-regions-update-many-without-region-nested.input';

@InputType()
export class RegionsUpdateWithoutGenerationsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => LocationsUpdateManyWithoutRegionNestedInput, {nullable:true})
    locations?: LocationsUpdateManyWithoutRegionNestedInput;

    @Field(() => PokedexesUpdateManyWithoutRegionNestedInput, {nullable:true})
    pokedexes?: PokedexesUpdateManyWithoutRegionNestedInput;

    @Field(() => VersionGroupRegionsUpdateManyWithoutRegionNestedInput, {nullable:true})
    versionGroups?: VersionGroupRegionsUpdateManyWithoutRegionNestedInput;
}
