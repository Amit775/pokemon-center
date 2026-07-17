import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GenerationsUncheckedUpdateManyWithoutRegionNestedInput } from '../generations/generations-unchecked-update-many-without-region-nested.input';
import { PokedexesUncheckedUpdateManyWithoutRegionNestedInput } from '../pokedexes/pokedexes-unchecked-update-many-without-region-nested.input';
import { VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput } from '../version-group-regions/version-group-regions-unchecked-update-many-without-region-nested.input';

@InputType()
export class RegionsUncheckedUpdateWithoutLocationsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => GenerationsUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    generations?: GenerationsUncheckedUpdateManyWithoutRegionNestedInput;

    @Field(() => PokedexesUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    pokedexes?: PokedexesUncheckedUpdateManyWithoutRegionNestedInput;

    @Field(() => VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    versionGroups?: VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput;
}
