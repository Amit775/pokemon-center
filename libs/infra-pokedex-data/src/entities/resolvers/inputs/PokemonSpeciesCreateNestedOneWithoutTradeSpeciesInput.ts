import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput";
import { PokemonSpeciesCreateWithoutTradeSpeciesInput } from "../inputs/PokemonSpeciesCreateWithoutTradeSpeciesInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput", {})
export class PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutTradeSpeciesInput, {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutTradeSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutTradeSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput | undefined;
}
