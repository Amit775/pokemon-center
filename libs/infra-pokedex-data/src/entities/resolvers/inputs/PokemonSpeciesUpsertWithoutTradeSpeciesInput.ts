import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutTradeSpeciesInput } from "../inputs/PokemonSpeciesCreateWithoutTradeSpeciesInput";
import { PokemonSpeciesUpdateWithoutTradeSpeciesInput } from "../inputs/PokemonSpeciesUpdateWithoutTradeSpeciesInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesUpsertWithoutTradeSpeciesInput", {})
export class PokemonSpeciesUpsertWithoutTradeSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutTradeSpeciesInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateWithoutTradeSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutTradeSpeciesInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutTradeSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;
}
