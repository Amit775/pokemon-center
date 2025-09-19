import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutPokemonMovesInput } from "../inputs/MoveUpdateWithoutPokemonMovesInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpdateToOneWithWhereWithoutPokemonMovesInput", {})
export class MoveUpdateToOneWithWhereWithoutPokemonMovesInput {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutPokemonMovesInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutPokemonMovesInput;
}
