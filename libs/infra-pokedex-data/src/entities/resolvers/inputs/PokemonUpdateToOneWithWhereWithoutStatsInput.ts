import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateWithoutStatsInput } from "../inputs/PokemonUpdateWithoutStatsInput";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonUpdateToOneWithWhereWithoutStatsInput", {})
export class PokemonUpdateToOneWithWhereWithoutStatsInput {
  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateWithoutStatsInput, {
    nullable: false
  })
  data!: PokemonUpdateWithoutStatsInput;
}
