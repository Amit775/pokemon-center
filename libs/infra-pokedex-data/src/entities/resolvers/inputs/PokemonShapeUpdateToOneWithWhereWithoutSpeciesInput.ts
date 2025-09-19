import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapeUpdateWithoutSpeciesInput } from "../inputs/PokemonShapeUpdateWithoutSpeciesInput";
import { PokemonShapeWhereInput } from "../inputs/PokemonShapeWhereInput";

@TypeGraphQL.InputType("PokemonShapeUpdateToOneWithWhereWithoutSpeciesInput", {})
export class PokemonShapeUpdateToOneWithWhereWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonShapeWhereInput, {
    nullable: true
  })
  where?: PokemonShapeWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapeUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: PokemonShapeUpdateWithoutSpeciesInput;
}
