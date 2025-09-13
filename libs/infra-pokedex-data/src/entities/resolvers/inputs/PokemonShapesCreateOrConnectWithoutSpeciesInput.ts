import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapesCreateWithoutSpeciesInput } from "../inputs/PokemonShapesCreateWithoutSpeciesInput";
import { PokemonShapesWhereUniqueInput } from "../inputs/PokemonShapesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonShapesCreateOrConnectWithoutSpeciesInput", {})
export class PokemonShapesCreateOrConnectWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonShapesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonShapesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonShapesCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonShapesCreateWithoutSpeciesInput;
}
