import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateWithoutPokemonMovesInput } from "../inputs/MovesUpdateWithoutPokemonMovesInput";
import { MovesWhereInput } from "../inputs/MovesWhereInput";

@TypeGraphQL.InputType("MovesUpdateToOneWithWhereWithoutPokemonMovesInput", {})
export class MovesUpdateToOneWithWhereWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => MovesWhereInput, {
    nullable: true
  })
  where?: MovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateWithoutPokemonMovesInput, {
    nullable: false
  })
  data!: MovesUpdateWithoutPokemonMovesInput;
}
