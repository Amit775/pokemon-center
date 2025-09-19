import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateWithoutMoveMethodInput } from "../inputs/PokemonMoveCreateWithoutMoveMethodInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveCreateOrConnectWithoutMoveMethodInput", {})
export class PokemonMoveCreateOrConnectWithoutMoveMethodInput {
  @TypeGraphQL.Field(_type => PokemonMoveWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveCreateWithoutMoveMethodInput, {
    nullable: false
  })
  create!: PokemonMoveCreateWithoutMoveMethodInput;
}
