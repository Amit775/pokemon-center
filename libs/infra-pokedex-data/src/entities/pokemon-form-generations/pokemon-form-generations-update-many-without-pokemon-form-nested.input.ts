import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormGenerationsCreateWithoutPokemonFormInput } from './pokemon-form-generations-create-without-pokemon-form.input';
import { Type } from 'class-transformer';
import { PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput } from './pokemon-form-generations-create-or-connect-without-pokemon-form.input';
import { PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput } from './pokemon-form-generations-upsert-with-where-unique-without-pokemon-form.input';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsCreateManyPokemonFormInputEnvelope } from './pokemon-form-generations-create-many-pokemon-form-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';
import { PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput } from './pokemon-form-generations-update-with-where-unique-without-pokemon-form.input';
import { PokemonFormGenerationsUpdateManyWithWhereWithoutPokemonFormInput } from './pokemon-form-generations-update-many-with-where-without-pokemon-form.input';
import { PokemonFormGenerationsScalarWhereInput } from './pokemon-form-generations-scalar-where.input';

@InputType()
export class PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput {

    @Field(() => [PokemonFormGenerationsCreateWithoutPokemonFormInput], {nullable:true})
    @Type(() => PokemonFormGenerationsCreateWithoutPokemonFormInput)
    create?: Array<PokemonFormGenerationsCreateWithoutPokemonFormInput>;

    @Field(() => [PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput], {nullable:true})
    @Type(() => PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput)
    connectOrCreate?: Array<PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput>;

    @Field(() => [PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput], {nullable:true})
    @Type(() => PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput)
    upsert?: Array<PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput>;

    @Field(() => PokemonFormGenerationsCreateManyPokemonFormInputEnvelope, {nullable:true})
    @Type(() => PokemonFormGenerationsCreateManyPokemonFormInputEnvelope)
    createMany?: Identity<PokemonFormGenerationsCreateManyPokemonFormInputEnvelope>;

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

    @Field(() => [PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput], {nullable:true})
    @Type(() => PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput)
    update?: Array<PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput>;

    @Field(() => [PokemonFormGenerationsUpdateManyWithWhereWithoutPokemonFormInput], {nullable:true})
    @Type(() => PokemonFormGenerationsUpdateManyWithWhereWithoutPokemonFormInput)
    updateMany?: Array<PokemonFormGenerationsUpdateManyWithWhereWithoutPokemonFormInput>;

    @Field(() => [PokemonFormGenerationsScalarWhereInput], {nullable:true})
    @Type(() => PokemonFormGenerationsScalarWhereInput)
    deleteMany?: Array<PokemonFormGenerationsScalarWhereInput>;
}
