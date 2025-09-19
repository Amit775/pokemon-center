import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatUpdateWithoutStatInput } from "../inputs/PokemonStatUpdateWithoutStatInput";
import { PokemonStatWhereUniqueInput } from "../inputs/PokemonStatWhereUniqueInput";

@TypeGraphQL.InputType("PokemonStatUpdateWithWhereUniqueWithoutStatInput", {})
export class PokemonStatUpdateWithWhereUniqueWithoutStatInput {
  @TypeGraphQL.Field(_type => PokemonStatWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonStatWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonStatUpdateWithoutStatInput, {
    nullable: false
  })
  data!: PokemonStatUpdateWithoutStatInput;
}
