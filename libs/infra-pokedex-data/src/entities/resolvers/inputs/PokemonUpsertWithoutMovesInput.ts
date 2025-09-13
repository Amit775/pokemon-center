import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutMovesInput } from "../inputs/PokemonCreateWithoutMovesInput";
import { PokemonUpdateWithoutMovesInput } from "../inputs/PokemonUpdateWithoutMovesInput";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonUpsertWithoutMovesInput", {})
export class PokemonUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => PokemonUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: PokemonUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutMovesInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;
}
