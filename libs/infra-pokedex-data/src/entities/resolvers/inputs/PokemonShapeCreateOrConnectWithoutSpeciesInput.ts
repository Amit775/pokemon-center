import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonShapeCreateWithoutSpeciesInput } from "../inputs/PokemonShapeCreateWithoutSpeciesInput";
import { PokemonShapeWhereUniqueInput } from "../inputs/PokemonShapeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonShapeCreateOrConnectWithoutSpeciesInput", {})
export class PokemonShapeCreateOrConnectWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => PokemonShapeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonShapeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonShapeCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: PokemonShapeCreateWithoutSpeciesInput;
}
