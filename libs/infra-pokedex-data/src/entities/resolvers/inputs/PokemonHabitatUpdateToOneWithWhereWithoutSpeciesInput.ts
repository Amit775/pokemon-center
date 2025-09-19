import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatUpdateWithoutSpeciesInput } from "../inputs/PokemonHabitatUpdateWithoutSpeciesInput";
import { PokemonHabitatWhereInput } from "../inputs/PokemonHabitatWhereInput";

@TypeGraphQL.InputType("PokemonHabitatUpdateToOneWithWhereWithoutSpeciesInput", {})
export class PokemonHabitatUpdateToOneWithWhereWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonHabitatWhereInput, {
    nullable: true
  })
  where?: PokemonHabitatWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: PokemonHabitatUpdateWithoutSpeciesInput;
}
