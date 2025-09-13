import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutGameIndicesInput } from "../inputs/PokemonCreateWithoutGameIndicesInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateOrConnectWithoutGameIndicesInput", {})
export class PokemonCreateOrConnectWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutGameIndicesInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutGameIndicesInput;
}
