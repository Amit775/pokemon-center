import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesCreateManyPokemonInputEnvelope } from "../inputs/PokemonAbilitiesCreateManyPokemonInputEnvelope";
import { PokemonAbilitiesCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonAbilitiesCreateOrConnectWithoutPokemonInput";
import { PokemonAbilitiesCreateWithoutPokemonInput } from "../inputs/PokemonAbilitiesCreateWithoutPokemonInput";
import { PokemonAbilitiesWhereUniqueInput } from "../inputs/PokemonAbilitiesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonAbilitiesCreateNestedManyWithoutPokemonInput", {})
export class PokemonAbilitiesCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonAbilitiesCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonAbilitiesCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonAbilitiesCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonAbilitiesCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonAbilitiesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonAbilitiesWhereUniqueInput[] | undefined;
}
