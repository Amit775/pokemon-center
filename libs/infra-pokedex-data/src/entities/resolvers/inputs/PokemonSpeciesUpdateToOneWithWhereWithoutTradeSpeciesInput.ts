import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateWithoutTradeSpeciesInput } from "../inputs/PokemonSpeciesUpdateWithoutTradeSpeciesInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateToOneWithWhereWithoutTradeSpeciesInput", {})
export class PokemonSpeciesUpdateToOneWithWhereWithoutTradeSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutTradeSpeciesInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateWithoutTradeSpeciesInput;
}
