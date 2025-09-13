import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionWhereInput } from "../inputs/PokemonEvolutionWhereInput";

@TypeGraphQL.InputType("PokemonEvolutionListRelationFilter", {})
export class PokemonEvolutionListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereInput, {
    nullable: true
  })
  every?: PokemonEvolutionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionWhereInput, {
    nullable: true
  })
  some?: PokemonEvolutionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionWhereInput, {
    nullable: true
  })
  none?: PokemonEvolutionWhereInput | undefined;
}
