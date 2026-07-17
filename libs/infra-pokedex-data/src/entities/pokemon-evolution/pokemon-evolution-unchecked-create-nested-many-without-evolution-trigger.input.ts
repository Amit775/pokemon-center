import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutEvolutionTriggerInput } from './pokemon-evolution-create-without-evolution-trigger.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput } from './pokemon-evolution-create-or-connect-without-evolution-trigger.input';
import { PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope } from './pokemon-evolution-create-many-evolution-trigger-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class PokemonEvolutionUncheckedCreateNestedManyWithoutEvolutionTriggerInput {

    @Field(() => [PokemonEvolutionCreateWithoutEvolutionTriggerInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutEvolutionTriggerInput)
    create?: Array<PokemonEvolutionCreateWithoutEvolutionTriggerInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutEvolutionTriggerInput>;

    @Field(() => PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope)
    createMany?: PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;
}
