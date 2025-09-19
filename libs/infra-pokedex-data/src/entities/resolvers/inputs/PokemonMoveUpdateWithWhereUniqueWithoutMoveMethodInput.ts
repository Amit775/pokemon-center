import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveUpdateWithoutMoveMethodInput } from "../inputs/PokemonMoveUpdateWithoutMoveMethodInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveUpdateWithWhereUniqueWithoutMoveMethodInput", {})
export class PokemonMoveUpdateWithWhereUniqueWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => PokemonMoveWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveUpdateWithoutMoveMethodInput, {
    nullable: false
  })
  data!: PokemonMoveUpdateWithoutMoveMethodInput;
}
