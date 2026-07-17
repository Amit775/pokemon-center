import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EggGroupsCreateNestedOneWithoutSpeciesInput } from '../egg-groups/egg-groups-create-nested-one-without-species.input';

@InputType()
export class PokemonEggGroupsCreateWithoutSpeciesInput {

    @Field(() => EggGroupsCreateNestedOneWithoutSpeciesInput, {nullable:false})
    eggGroup!: Identity<EggGroupsCreateNestedOneWithoutSpeciesInput>;
}
