import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateWithoutMoveInput } from "../inputs/PokemonMoveCreateWithoutMoveInput";
import { PokemonMoveUpdateWithoutMoveInput } from "../inputs/PokemonMoveUpdateWithoutMoveInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveUpsertWithWhereUniqueWithoutMoveInput", {})
export class PokemonMoveUpsertWithWhereUniqueWithoutMoveInput {
  @TypeGraphQL.Field(_type => PokemonMoveWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveUpdateWithoutMoveInput, {
    nullable: false
  })
  update!: PokemonMoveUpdateWithoutMoveInput;

  @TypeGraphQL.Field(_type => PokemonMoveCreateWithoutMoveInput, {
    nullable: false
  })
  create!: PokemonMoveCreateWithoutMoveInput;
}
