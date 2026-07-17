import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormGenerationsCreateWithoutGenerationInput } from './pokemon-form-generations-create-without-generation.input';
import { Type } from 'class-transformer';
import { PokemonFormGenerationsCreateOrConnectWithoutGenerationInput } from './pokemon-form-generations-create-or-connect-without-generation.input';
import { PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput } from './pokemon-form-generations-upsert-with-where-unique-without-generation.input';
import { PokemonFormGenerationsCreateManyGenerationInputEnvelope } from './pokemon-form-generations-create-many-generation-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';
import { PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput } from './pokemon-form-generations-update-with-where-unique-without-generation.input';
import { PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput } from './pokemon-form-generations-update-many-with-where-without-generation.input';
import { PokemonFormGenerationsScalarWhereInput } from './pokemon-form-generations-scalar-where.input';

@InputType()
export class PokemonFormGenerationsUncheckedUpdateManyWithoutGenerationNestedInput {

    @Field(() => [PokemonFormGenerationsCreateWithoutGenerationInput], {nullable:true})
    @Type(() => PokemonFormGenerationsCreateWithoutGenerationInput)
    create?: Array<PokemonFormGenerationsCreateWithoutGenerationInput>;

    @Field(() => [PokemonFormGenerationsCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => PokemonFormGenerationsCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<PokemonFormGenerationsCreateOrConnectWithoutGenerationInput>;

    @Field(() => [PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput)
    upsert?: Array<PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput>;

    @Field(() => PokemonFormGenerationsCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => PokemonFormGenerationsCreateManyGenerationInputEnvelope)
    createMany?: PokemonFormGenerationsCreateManyGenerationInputEnvelope;

    @Field(() => [PokemonFormGenerationsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>>;

    @Field(() => [PokemonFormGenerationsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>>;

    @Field(() => [PokemonFormGenerationsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>>;

    @Field(() => [PokemonFormGenerationsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>>;

    @Field(() => [PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput)
    update?: Array<PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput>;

    @Field(() => [PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput], {nullable:true})
    @Type(() => PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput)
    updateMany?: Array<PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput>;

    @Field(() => [PokemonFormGenerationsScalarWhereInput], {nullable:true})
    @Type(() => PokemonFormGenerationsScalarWhereInput)
    deleteMany?: Array<PokemonFormGenerationsScalarWhereInput>;
}
