import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormsCreateWithoutPokemonInput } from './pokemon-forms-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonFormsCreateOrConnectWithoutPokemonInput } from './pokemon-forms-create-or-connect-without-pokemon.input';
import { PokemonFormsUpsertWithWhereUniqueWithoutPokemonInput } from './pokemon-forms-upsert-with-where-unique-without-pokemon.input';
import type { Identity } from 'identity-type';
import { PokemonFormsCreateManyPokemonInputEnvelope } from './pokemon-forms-create-many-pokemon-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { PokemonFormsUpdateWithWhereUniqueWithoutPokemonInput } from './pokemon-forms-update-with-where-unique-without-pokemon.input';
import { PokemonFormsUpdateManyWithWhereWithoutPokemonInput } from './pokemon-forms-update-many-with-where-without-pokemon.input';
import { PokemonFormsScalarWhereInput } from './pokemon-forms-scalar-where.input';

@InputType()
export class PokemonFormsUpdateManyWithoutPokemonNestedInput {

    @Field(() => [PokemonFormsCreateWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonFormsCreateWithoutPokemonInput)
    create?: Array<PokemonFormsCreateWithoutPokemonInput>;

    @Field(() => [PokemonFormsCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonFormsCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<PokemonFormsCreateOrConnectWithoutPokemonInput>;

    @Field(() => [PokemonFormsUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonFormsUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<PokemonFormsUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => PokemonFormsCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => PokemonFormsCreateManyPokemonInputEnvelope)
    createMany?: Identity<PokemonFormsCreateManyPokemonInputEnvelope>;

    @Field(() => [PokemonFormsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonFormsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonFormsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonFormsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonFormsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonFormsUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonFormsUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<PokemonFormsUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [PokemonFormsUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonFormsUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<PokemonFormsUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [PokemonFormsScalarWhereInput], {nullable:true})
    @Type(() => PokemonFormsScalarWhereInput)
    deleteMany?: Array<PokemonFormsScalarWhereInput>;
}
