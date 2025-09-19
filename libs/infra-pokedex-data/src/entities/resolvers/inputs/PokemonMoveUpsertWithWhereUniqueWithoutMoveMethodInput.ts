import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateWithoutMoveMethodInput } from "../inputs/PokemonMoveCreateWithoutMoveMethodInput";
import { PokemonMoveUpdateWithoutMoveMethodInput } from "../inputs/PokemonMoveUpdateWithoutMoveMethodInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveUpsertWithWhereUniqueWithoutMoveMethodInput", {})
export class PokemonMoveUpsertWithWhereUniqueWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => PokemonMoveWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveUpdateWithoutMoveMethodInput, {
    nullable: false
  })
  update!: PokemonMoveUpdateWithoutMoveMethodInput;

  @TypeGraphQL.Field(_type => PokemonMoveCreateWithoutMoveMethodInput, {
    nullable: false
  })
  create!: PokemonMoveCreateWithoutMoveMethodInput;
}
