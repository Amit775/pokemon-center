import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateWithoutVersionGroupInput } from "../inputs/PokemonMoveCreateWithoutVersionGroupInput";
import { PokemonMoveUpdateWithoutVersionGroupInput } from "../inputs/PokemonMoveUpdateWithoutVersionGroupInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveUpsertWithWhereUniqueWithoutVersionGroupInput", {})
export class PokemonMoveUpsertWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonMoveWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  update!: PokemonMoveUpdateWithoutVersionGroupInput;

  @TypeGraphQL.Field(_type => PokemonMoveCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: PokemonMoveCreateWithoutVersionGroupInput;
}
