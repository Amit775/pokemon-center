import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapesCreateWithoutSpeciesInput } from "../inputs/PokemonShapesCreateWithoutSpeciesInput";
import { PokemonShapesUpdateWithoutSpeciesInput } from "../inputs/PokemonShapesUpdateWithoutSpeciesInput";
import { PokemonShapesWhereInput } from "../inputs/PokemonShapesWhereInput";

@TypeGraphQL.InputType("PokemonShapesUpsertWithoutSpeciesInput", {})
export class PokemonShapesUpsertWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonShapesUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: PokemonShapesUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonShapesCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonShapesCreateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonShapesWhereInput, {
    nullable: true
  })
  where?: PokemonShapesWhereInput | undefined;
}
