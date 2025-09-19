import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeWhereInput } from "../inputs/PokemonFormTypeWhereInput";

@TypeGraphQL.InputType("PokemonFormTypeListRelationFilter", {})
export class PokemonFormTypeListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonFormTypeWhereInput, {
    nullable: true
  })
  every?: PokemonFormTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeWhereInput, {
    nullable: true
  })
  some?: PokemonFormTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeWhereInput, {
    nullable: true
  })
  none?: PokemonFormTypeWhereInput | undefined;
}
