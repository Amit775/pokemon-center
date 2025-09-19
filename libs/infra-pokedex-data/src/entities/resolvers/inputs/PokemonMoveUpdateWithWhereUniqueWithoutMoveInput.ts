import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveUpdateWithoutMoveInput } from "../inputs/PokemonMoveUpdateWithoutMoveInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveUpdateWithWhereUniqueWithoutMoveInput", {})
export class PokemonMoveUpdateWithWhereUniqueWithoutMoveInput {
  @TypeGraphQL.Field(_type => PokemonMoveWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveUpdateWithoutMoveInput, {
    nullable: false
  })
  data!: PokemonMoveUpdateWithoutMoveInput;
}
