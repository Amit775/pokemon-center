import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesCreateWithoutTypeInput } from "../inputs/PokemonTypesCreateWithoutTypeInput";
import { PokemonTypesWhereUniqueInput } from "../inputs/PokemonTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypesCreateOrConnectWithoutTypeInput", {})
export class PokemonTypesCreateOrConnectWithoutTypeInput {
  @TypeGraphQL.Field(_type => PokemonTypesWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonTypesCreateWithoutTypeInput, {
    nullable: false
  })
  create!: PokemonTypesCreateWithoutTypeInput;
}
