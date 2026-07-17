import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonTypesCreateWithoutTypeInput } from './pokemon-types-create-without-type.input';
import { Type } from 'class-transformer';
import { PokemonTypesCreateOrConnectWithoutTypeInput } from './pokemon-types-create-or-connect-without-type.input';
import { PokemonTypesUpsertWithWhereUniqueWithoutTypeInput } from './pokemon-types-upsert-with-where-unique-without-type.input';
import { PokemonTypesCreateManyTypeInputEnvelope } from './pokemon-types-create-many-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonTypesWhereUniqueInput } from './pokemon-types-where-unique.input';
import { PokemonTypesUpdateWithWhereUniqueWithoutTypeInput } from './pokemon-types-update-with-where-unique-without-type.input';
import { PokemonTypesUpdateManyWithWhereWithoutTypeInput } from './pokemon-types-update-many-with-where-without-type.input';
import { PokemonTypesScalarWhereInput } from './pokemon-types-scalar-where.input';

@InputType()
export class PokemonTypesUncheckedUpdateManyWithoutTypeNestedInput {

    @Field(() => [PokemonTypesCreateWithoutTypeInput], {nullable:true})
    @Type(() => PokemonTypesCreateWithoutTypeInput)
    create?: Array<PokemonTypesCreateWithoutTypeInput>;

    @Field(() => [PokemonTypesCreateOrConnectWithoutTypeInput], {nullable:true})
    @Type(() => PokemonTypesCreateOrConnectWithoutTypeInput)
    connectOrCreate?: Array<PokemonTypesCreateOrConnectWithoutTypeInput>;

    @Field(() => [PokemonTypesUpsertWithWhereUniqueWithoutTypeInput], {nullable:true})
    @Type(() => PokemonTypesUpsertWithWhereUniqueWithoutTypeInput)
    upsert?: Array<PokemonTypesUpsertWithWhereUniqueWithoutTypeInput>;

    @Field(() => PokemonTypesCreateManyTypeInputEnvelope, {nullable:true})
    @Type(() => PokemonTypesCreateManyTypeInputEnvelope)
    createMany?: PokemonTypesCreateManyTypeInputEnvelope;

    @Field(() => [PokemonTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonTypesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>>;

    @Field(() => [PokemonTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonTypesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>>;

    @Field(() => [PokemonTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonTypesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>>;

    @Field(() => [PokemonTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonTypesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>>;

    @Field(() => [PokemonTypesUpdateWithWhereUniqueWithoutTypeInput], {nullable:true})
    @Type(() => PokemonTypesUpdateWithWhereUniqueWithoutTypeInput)
    update?: Array<PokemonTypesUpdateWithWhereUniqueWithoutTypeInput>;

    @Field(() => [PokemonTypesUpdateManyWithWhereWithoutTypeInput], {nullable:true})
    @Type(() => PokemonTypesUpdateManyWithWhereWithoutTypeInput)
    updateMany?: Array<PokemonTypesUpdateManyWithWhereWithoutTypeInput>;

    @Field(() => [PokemonTypesScalarWhereInput], {nullable:true})
    @Type(() => PokemonTypesScalarWhereInput)
    deleteMany?: Array<PokemonTypesScalarWhereInput>;
}
