import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateWithoutSpeciesInput } from "../inputs/PokemonUpdateWithoutSpeciesInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonUpdateWithWhereUniqueWithoutSpeciesInput", {})
export class PokemonUpdateWithWhereUniqueWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: PokemonUpdateWithoutSpeciesInput;
}
