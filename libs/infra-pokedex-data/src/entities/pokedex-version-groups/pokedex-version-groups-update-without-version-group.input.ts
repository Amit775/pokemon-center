import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput } from '../pokedexes/pokedexes-update-one-required-without-version-groups-nested.input';

@InputType()
export class PokedexVersionGroupsUpdateWithoutVersionGroupInput {

    @Field(() => PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput, {nullable:true})
    pokedex?: PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput;
}
