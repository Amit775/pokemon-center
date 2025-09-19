import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutPokemonMovesInput } from "../inputs/MoveCreateWithoutPokemonMovesInput";
import { MoveUpdateWithoutPokemonMovesInput } from "../inputs/MoveUpdateWithoutPokemonMovesInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpsertWithoutPokemonMovesInput", {})
export class MoveUpsertWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => MoveUpdateWithoutPokemonMovesInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutPokemonMovesInput, {
    nullable: false
  })
  create!: MoveCreateWithoutPokemonMovesInput;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;
}
