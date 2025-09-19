import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexCreateWithoutVersionInput } from "../inputs/PokemonGameIndexCreateWithoutVersionInput";
import { PokemonGameIndexWhereUniqueInput } from "../inputs/PokemonGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndexCreateOrConnectWithoutVersionInput", {})
export class PokemonGameIndexCreateOrConnectWithoutVersionInput {
  @TypeGraphQL.Field(_type => PokemonGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonGameIndexCreateWithoutVersionInput, {
    nullable: false
  })
  create!: PokemonGameIndexCreateWithoutVersionInput;
}
