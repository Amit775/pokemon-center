import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateWithoutVersionGroupInput } from "../inputs/PokemonMoveCreateWithoutVersionGroupInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveCreateOrConnectWithoutVersionGroupInput", {})
export class PokemonMoveCreateOrConnectWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => PokemonMoveWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: PokemonMoveCreateWithoutVersionGroupInput;
}
