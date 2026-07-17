import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormGenerationsCreateWithoutGenerationInput } from './pokemon-form-generations-create-without-generation.input';
import { Type } from 'class-transformer';
import { PokemonFormGenerationsCreateOrConnectWithoutGenerationInput } from './pokemon-form-generations-create-or-connect-without-generation.input';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsCreateManyGenerationInputEnvelope } from './pokemon-form-generations-create-many-generation-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';

@InputType()
export class PokemonFormGenerationsCreateNestedManyWithoutGenerationInput {

    @Field(() => [PokemonFormGenerationsCreateWithoutGenerationInput], {nullable:true})
    @Type(() => PokemonFormGenerationsCreateWithoutGenerationInput)
    create?: Array<PokemonFormGenerationsCreateWithoutGenerationInput>;

    @Field(() => [PokemonFormGenerationsCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => PokemonFormGenerationsCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<PokemonFormGenerationsCreateOrConnectWithoutGenerationInput>;

    @Field(() => PokemonFormGenerationsCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => PokemonFormGenerationsCreateManyGenerationInputEnvelope)
    createMany?: Identity<PokemonFormGenerationsCreateManyGenerationInputEnvelope>;

    @Field(() => [PokemonFormGenerationsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>>;
}
