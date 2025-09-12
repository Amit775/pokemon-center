import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapesUpdateWithoutSpeciesInput } from "../inputs/PokemonShapesUpdateWithoutSpeciesInput";
import { PokemonShapesWhereInput } from "../inputs/PokemonShapesWhereInput";

@TypeGraphQL.InputType("PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput", {})
export class PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonShapesWhereInput, {
    nullable: true
  })
  where?: PokemonShapesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: PokemonShapesUpdateWithoutSpeciesInput;
}
