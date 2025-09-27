import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PokemonSpecies } from '../pokemon-species/pokemon-species.model';
import { Experience } from '../experience/experience.model';
import { GrowthRatesCount } from './growth-rates-count.output';

@ObjectType()
export class GrowthRates {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:false})
    formula!: string;

    @Field(() => [PokemonSpecies], {nullable:true})
    species?: Array<PokemonSpecies>;

    @Field(() => [Experience], {nullable:true})
    experience?: Array<Experience>;

    @Field(() => GrowthRatesCount, {nullable:false})
    _count?: GrowthRatesCount;
}
