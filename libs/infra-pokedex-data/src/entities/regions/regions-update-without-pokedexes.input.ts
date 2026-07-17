import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GenerationsUpdateManyWithoutRegionNestedInput } from '../generations/generations-update-many-without-region-nested.input';
import { LocationsUpdateManyWithoutRegionNestedInput } from '../locations/locations-update-many-without-region-nested.input';
import { VersionGroupRegionsUpdateManyWithoutRegionNestedInput } from '../version-group-regions/version-group-regions-update-many-without-region-nested.input';

@InputType()
export class RegionsUpdateWithoutPokedexesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => GenerationsUpdateManyWithoutRegionNestedInput, {nullable:true})
    generations?: GenerationsUpdateManyWithoutRegionNestedInput;

    @Field(() => LocationsUpdateManyWithoutRegionNestedInput, {nullable:true})
    locations?: LocationsUpdateManyWithoutRegionNestedInput;

    @Field(() => VersionGroupRegionsUpdateManyWithoutRegionNestedInput, {nullable:true})
    versionGroups?: VersionGroupRegionsUpdateManyWithoutRegionNestedInput;
}
