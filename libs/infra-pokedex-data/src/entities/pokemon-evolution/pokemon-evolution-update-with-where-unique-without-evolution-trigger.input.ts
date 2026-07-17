import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionUpdateWithoutEvolutionTriggerInput } from './pokemon-evolution-update-without-evolution-trigger.input';

@InputType()
export class PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutEvolutionTriggerInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutEvolutionTriggerInput)
    data!: PokemonEvolutionUpdateWithoutEvolutionTriggerInput;
}
