import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormTypesCreateWithoutTypeInput } from './pokemon-form-types-create-without-type.input';
import { Type } from 'class-transformer';
import { PokemonFormTypesCreateOrConnectWithoutTypeInput } from './pokemon-form-types-create-or-connect-without-type.input';
import { PokemonFormTypesUpsertWithWhereUniqueWithoutTypeInput } from './pokemon-form-types-upsert-with-where-unique-without-type.input';
import { PokemonFormTypesCreateManyTypeInputEnvelope } from './pokemon-form-types-create-many-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonFormTypesWhereUniqueInput } from './pokemon-form-types-where-unique.input';
import { PokemonFormTypesUpdateWithWhereUniqueWithoutTypeInput } from './pokemon-form-types-update-with-where-unique-without-type.input';
import { PokemonFormTypesUpdateManyWithWhereWithoutTypeInput } from './pokemon-form-types-update-many-with-where-without-type.input';
import { PokemonFormTypesScalarWhereInput } from './pokemon-form-types-scalar-where.input';

@InputType()
export class PokemonFormTypesUncheckedUpdateManyWithoutTypeNestedInput {

    @Field(() => [PokemonFormTypesCreateWithoutTypeInput], {nullable:true})
    @Type(() => PokemonFormTypesCreateWithoutTypeInput)
    create?: Array<PokemonFormTypesCreateWithoutTypeInput>;

    @Field(() => [PokemonFormTypesCreateOrConnectWithoutTypeInput], {nullable:true})
    @Type(() => PokemonFormTypesCreateOrConnectWithoutTypeInput)
    connectOrCreate?: Array<PokemonFormTypesCreateOrConnectWithoutTypeInput>;

    @Field(() => [PokemonFormTypesUpsertWithWhereUniqueWithoutTypeInput], {nullable:true})
    @Type(() => PokemonFormTypesUpsertWithWhereUniqueWithoutTypeInput)
    upsert?: Array<PokemonFormTypesUpsertWithWhereUniqueWithoutTypeInput>;

    @Field(() => PokemonFormTypesCreateManyTypeInputEnvelope, {nullable:true})
    @Type(() => PokemonFormTypesCreateManyTypeInputEnvelope)
    createMany?: PokemonFormTypesCreateManyTypeInputEnvelope;

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

    @Field(() => [PokemonFormTypesUpdateWithWhereUniqueWithoutTypeInput], {nullable:true})
    @Type(() => PokemonFormTypesUpdateWithWhereUniqueWithoutTypeInput)
    update?: Array<PokemonFormTypesUpdateWithWhereUniqueWithoutTypeInput>;

    @Field(() => [PokemonFormTypesUpdateManyWithWhereWithoutTypeInput], {nullable:true})
    @Type(() => PokemonFormTypesUpdateManyWithWhereWithoutTypeInput)
    updateMany?: Array<PokemonFormTypesUpdateManyWithWhereWithoutTypeInput>;

    @Field(() => [PokemonFormTypesScalarWhereInput], {nullable:true})
    @Type(() => PokemonFormTypesScalarWhereInput)
    deleteMany?: Array<PokemonFormTypesScalarWhereInput>;
}
