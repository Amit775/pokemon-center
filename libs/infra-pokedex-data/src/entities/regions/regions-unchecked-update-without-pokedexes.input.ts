import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GenerationsUncheckedUpdateManyWithoutRegionNestedInput } from '../generations/generations-unchecked-update-many-without-region-nested.input';
import { LocationsUncheckedUpdateManyWithoutRegionNestedInput } from '../locations/locations-unchecked-update-many-without-region-nested.input';
import { VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput } from '../version-group-regions/version-group-regions-unchecked-update-many-without-region-nested.input';

@InputType()
export class RegionsUncheckedUpdateWithoutPokedexesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => GenerationsUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    generations?: GenerationsUncheckedUpdateManyWithoutRegionNestedInput;

    @Field(() => LocationsUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    locations?: LocationsUncheckedUpdateManyWithoutRegionNestedInput;

    @Field(() => VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput, {nullable:true})
    versionGroups?: VersionGroupRegionsUncheckedUpdateManyWithoutRegionNestedInput;
}
