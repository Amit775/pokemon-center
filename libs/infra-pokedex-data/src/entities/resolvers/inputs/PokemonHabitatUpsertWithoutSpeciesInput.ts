import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatCreateWithoutSpeciesInput } from "../inputs/PokemonHabitatCreateWithoutSpeciesInput";
import { PokemonHabitatUpdateWithoutSpeciesInput } from "../inputs/PokemonHabitatUpdateWithoutSpeciesInput";
import { PokemonHabitatWhereInput } from "../inputs/PokemonHabitatWhereInput";

@TypeGraphQL.InputType("PokemonHabitatUpsertWithoutSpeciesInput", {})
export class PokemonHabitatUpsertWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonHabitatUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: PokemonHabitatUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonHabitatCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonHabitatCreateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonHabitatWhereInput, {
    nullable: true
  })
  where?: PokemonHabitatWhereInput | undefined;
}
