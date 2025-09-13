import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateWithoutPokemonMovesInput } from "../inputs/MovesCreateWithoutPokemonMovesInput";
import { MovesUpdateWithoutPokemonMovesInput } from "../inputs/MovesUpdateWithoutPokemonMovesInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpsertWithoutPokemonMovesInput", {})
export class MovesUpsertWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => MovesUpdateWithoutPokemonMovesInput, {
    nullable: false
  })
  update!: MovesUpdateWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => MovesCreateWithoutPokemonMovesInput, {
    nullable: false
  })
  create!: MovesCreateWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;
}
