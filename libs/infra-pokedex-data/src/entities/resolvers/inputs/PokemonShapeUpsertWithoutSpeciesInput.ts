import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapeCreateWithoutSpeciesInput } from "../inputs/PokemonShapeCreateWithoutSpeciesInput";
import { PokemonShapeUpdateWithoutSpeciesInput } from "../inputs/PokemonShapeUpdateWithoutSpeciesInput";
import { PokemonShapeWhereInput } from "../inputs/PokemonShapeWhereInput";

@TypeGraphQL.InputType("PokemonShapeUpsertWithoutSpeciesInput", {})
export class PokemonShapeUpsertWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonShapeUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: PokemonShapeUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonShapeCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonShapeCreateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonShapeWhereInput, {
    nullable: true
  })
  where?: PokemonShapeWhereInput | undefined;
}
