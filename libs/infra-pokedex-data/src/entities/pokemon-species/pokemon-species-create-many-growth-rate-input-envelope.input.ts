import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateManyGrowthRateInput } from './pokemon-species-create-many-growth-rate.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonSpeciesCreateManyGrowthRateInputEnvelope {

    @Field(() => [PokemonSpeciesCreateManyGrowthRateInput], {nullable:false})
    @Type(() => PokemonSpeciesCreateManyGrowthRateInput)
    data!: Array<PokemonSpeciesCreateManyGrowthRateInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
