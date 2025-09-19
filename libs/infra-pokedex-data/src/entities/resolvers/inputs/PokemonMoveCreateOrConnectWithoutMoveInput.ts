import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveCreateWithoutMoveInput } from "../inputs/PokemonMoveCreateWithoutMoveInput";
import { PokemonMoveWhereUniqueInput } from "../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveCreateOrConnectWithoutMoveInput", {})
export class PokemonMoveCreateOrConnectWithoutMoveInput {
  @TypeGraphQL.Field(_type => PokemonMoveWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveCreateWithoutMoveInput, {
    nullable: false
  })
  create!: PokemonMoveCreateWithoutMoveInput;
}
