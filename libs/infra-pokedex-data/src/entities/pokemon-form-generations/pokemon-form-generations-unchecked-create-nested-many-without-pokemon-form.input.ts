import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormGenerationsCreateWithoutPokemonFormInput } from './pokemon-form-generations-create-without-pokemon-form.input';
import { Type } from 'class-transformer';
import { PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput } from './pokemon-form-generations-create-or-connect-without-pokemon-form.input';
import { PokemonFormGenerationsCreateManyPokemonFormInputEnvelope } from './pokemon-form-generations-create-many-pokemon-form-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';

@InputType()
export class PokemonFormGenerationsUncheckedCreateNestedManyWithoutPokemonFormInput {

    @Field(() => [PokemonFormGenerationsCreateWithoutPokemonFormInput], {nullable:true})
    @Type(() => PokemonFormGenerationsCreateWithoutPokemonFormInput)
    create?: Array<PokemonFormGenerationsCreateWithoutPokemonFormInput>;

    @Field(() => [PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput], {nullable:true})
    @Type(() => PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput)
    connectOrCreate?: Array<PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput>;

    @Field(() => PokemonFormGenerationsCreateManyPokemonFormInputEnvelope, {nullable:true})
    @Type(() => PokemonFormGenerationsCreateManyPokemonFormInputEnvelope)
    createMany?: PokemonFormGenerationsCreateManyPokemonFormInputEnvelope;

    @Field(() => [PokemonFormGenerationsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>>;
}
