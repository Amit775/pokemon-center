import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutEvolvesToInput } from './pokemon-species-create-without-evolves-to.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutEvolvesToInput } from './pokemon-species-create-or-connect-without-evolves-to.input';
import { PokemonSpeciesUpsertWithoutEvolvesToInput } from './pokemon-species-upsert-without-evolves-to.input';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { PokemonSpeciesUpdateToOneWithWhereWithoutEvolvesToInput } from './pokemon-species-update-to-one-with-where-without-evolves-to.input';

@InputType()
export class PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput {

    @Field(() => PokemonSpeciesCreateWithoutEvolvesToInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutEvolvesToInput)
    create?: PokemonSpeciesCreateWithoutEvolvesToInput;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutEvolvesToInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutEvolvesToInput)
    connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutEvolvesToInput;

    @Field(() => PokemonSpeciesUpsertWithoutEvolvesToInput, {nullable:true})
    @Type(() => PokemonSpeciesUpsertWithoutEvolvesToInput)
    upsert?: PokemonSpeciesUpsertWithoutEvolvesToInput;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    disconnect?: PokemonSpeciesWhereInput;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    delete?: PokemonSpeciesWhereInput;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateToOneWithWhereWithoutEvolvesToInput, {nullable:true})
    @Type(() => PokemonSpeciesUpdateToOneWithWhereWithoutEvolvesToInput)
    update?: PokemonSpeciesUpdateToOneWithWhereWithoutEvolvesToInput;
}
