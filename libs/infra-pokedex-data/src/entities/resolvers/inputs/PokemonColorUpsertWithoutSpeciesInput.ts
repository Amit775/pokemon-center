import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorCreateWithoutSpeciesInput } from "../inputs/PokemonColorCreateWithoutSpeciesInput";
import { PokemonColorUpdateWithoutSpeciesInput } from "../inputs/PokemonColorUpdateWithoutSpeciesInput";
import { PokemonColorWhereInput } from "../inputs/PokemonColorWhereInput";

@TypeGraphQL.InputType("PokemonColorUpsertWithoutSpeciesInput", {})
export class PokemonColorUpsertWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonColorUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: PokemonColorUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonColorCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonColorCreateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonColorWhereInput, {
    nullable: true
  })
  where?: PokemonColorWhereInput | undefined;
}
