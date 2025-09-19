import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypeCreateWithoutTypeInput } from "../inputs/PokemonTypeCreateWithoutTypeInput";
import { PokemonTypeWhereUniqueInput } from "../inputs/PokemonTypeWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypeCreateOrConnectWithoutTypeInput", {})
export class PokemonTypeCreateOrConnectWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonTypeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonTypeCreateWithoutTypeInput, {
    nullable: false
  })
  create!: PokemonTypeCreateWithoutTypeInput;
}
