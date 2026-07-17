import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutTradeSpeciesInput } from './pokemon-species-create-without-trade-species.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput } from './pokemon-species-create-or-connect-without-trade-species.input';
import { PokemonSpeciesUpsertWithoutTradeSpeciesInput } from './pokemon-species-upsert-without-trade-species.input';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { PokemonSpeciesUpdateToOneWithWhereWithoutTradeSpeciesInput } from './pokemon-species-update-to-one-with-where-without-trade-species.input';

@InputType()
export class PokemonSpeciesUpdateOneWithoutTradeSpeciesNestedInput {

    @Field(() => PokemonSpeciesCreateWithoutTradeSpeciesInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutTradeSpeciesInput)
    create?: PokemonSpeciesCreateWithoutTradeSpeciesInput;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput)
    connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput;

    @Field(() => PokemonSpeciesUpsertWithoutTradeSpeciesInput, {nullable:true})
    @Type(() => PokemonSpeciesUpsertWithoutTradeSpeciesInput)
    upsert?: PokemonSpeciesUpsertWithoutTradeSpeciesInput;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    disconnect?: PokemonSpeciesWhereInput;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    delete?: PokemonSpeciesWhereInput;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateToOneWithWhereWithoutTradeSpeciesInput, {nullable:true})
    @Type(() => PokemonSpeciesUpdateToOneWithWhereWithoutTradeSpeciesInput)
    update?: PokemonSpeciesUpdateToOneWithWhereWithoutTradeSpeciesInput;
}
