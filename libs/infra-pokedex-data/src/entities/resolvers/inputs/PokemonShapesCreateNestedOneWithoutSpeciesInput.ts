import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapesCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonShapesCreateOrConnectWithoutSpeciesInput";
import { PokemonShapesCreateWithoutSpeciesInput } from "../inputs/PokemonShapesCreateWithoutSpeciesInput";
import { PokemonShapesWhereUniqueInput } from "../inputs/PokemonShapesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonShapesCreateNestedOneWithoutSpeciesInput", {})
export class PokemonShapesCreateNestedOneWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonShapesCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: PokemonShapesCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonShapesCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonShapesWhereUniqueInput | undefined;
}
