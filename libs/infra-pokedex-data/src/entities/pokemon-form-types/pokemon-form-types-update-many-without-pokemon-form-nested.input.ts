import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormTypesCreateWithoutPokemonFormInput } from './pokemon-form-types-create-without-pokemon-form.input';
import { Type } from 'class-transformer';
import { PokemonFormTypesCreateOrConnectWithoutPokemonFormInput } from './pokemon-form-types-create-or-connect-without-pokemon-form.input';
import { PokemonFormTypesUpsertWithWhereUniqueWithoutPokemonFormInput } from './pokemon-form-types-upsert-with-where-unique-without-pokemon-form.input';
import type { Identity } from 'identity-type';
import { PokemonFormTypesCreateManyPokemonFormInputEnvelope } from './pokemon-form-types-create-many-pokemon-form-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormTypesWhereUniqueInput } from './pokemon-form-types-where-unique.input';
import { PokemonFormTypesUpdateWithWhereUniqueWithoutPokemonFormInput } from './pokemon-form-types-update-with-where-unique-without-pokemon-form.input';
import { PokemonFormTypesUpdateManyWithWhereWithoutPokemonFormInput } from './pokemon-form-types-update-many-with-where-without-pokemon-form.input';
import { PokemonFormTypesScalarWhereInput } from './pokemon-form-types-scalar-where.input';

@InputType()
export class PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput {

    @Field(() => [PokemonFormTypesCreateWithoutPokemonFormInput], {nullable:true})
    @Type(() => PokemonFormTypesCreateWithoutPokemonFormInput)
    create?: Array<PokemonFormTypesCreateWithoutPokemonFormInput>;

    @Field(() => [PokemonFormTypesCreateOrConnectWithoutPokemonFormInput], {nullable:true})
    @Type(() => PokemonFormTypesCreateOrConnectWithoutPokemonFormInput)
    connectOrCreate?: Array<PokemonFormTypesCreateOrConnectWithoutPokemonFormInput>;

    @Field(() => [PokemonFormTypesUpsertWithWhereUniqueWithoutPokemonFormInput], {nullable:true})
    @Type(() => PokemonFormTypesUpsertWithWhereUniqueWithoutPokemonFormInput)
    upsert?: Array<PokemonFormTypesUpsertWithWhereUniqueWithoutPokemonFormInput>;

    @Field(() => PokemonFormTypesCreateManyPokemonFormInputEnvelope, {nullable:true})
    @Type(() => PokemonFormTypesCreateManyPokemonFormInputEnvelope)
    createMany?: Identity<PokemonFormTypesCreateManyPokemonFormInputEnvelope>;

    @Field(() => [PokemonFormTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormTypesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonFormTypesWhereUniqueInput, 'pokemon_form_id_type_id'>>;

    @Field(() => [PokemonFormTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormTypesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonFormTypesWhereUniqueInput, 'pokemon_form_id_type_id'>>;

    @Field(() => [PokemonFormTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormTypesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonFormTypesWhereUniqueInput, 'pokemon_form_id_type_id'>>;

    @Field(() => [PokemonFormTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormTypesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonFormTypesWhereUniqueInput, 'pokemon_form_id_type_id'>>;

    @Field(() => [PokemonFormTypesUpdateWithWhereUniqueWithoutPokemonFormInput], {nullable:true})
    @Type(() => PokemonFormTypesUpdateWithWhereUniqueWithoutPokemonFormInput)
    update?: Array<PokemonFormTypesUpdateWithWhereUniqueWithoutPokemonFormInput>;

    @Field(() => [PokemonFormTypesUpdateManyWithWhereWithoutPokemonFormInput], {nullable:true})
    @Type(() => PokemonFormTypesUpdateManyWithWhereWithoutPokemonFormInput)
    updateMany?: Array<PokemonFormTypesUpdateManyWithWhereWithoutPokemonFormInput>;

    @Field(() => [PokemonFormTypesScalarWhereInput], {nullable:true})
    @Type(() => PokemonFormTypesScalarWhereInput)
    deleteMany?: Array<PokemonFormTypesScalarWhereInput>;
}
